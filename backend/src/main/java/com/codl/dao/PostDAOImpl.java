package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Post;
import com.codl.models.Vote;
import com.codl.models.utils.Filter;

@Repository
public class PostDAOImpl implements PostDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getPostsWithFilter(Filter filter) {
		Query query;
		List<Post> posts;
		if (filter.getLanguage().equals("all")) {
			if (filter.getChrono().equals("new")) {
				query = this.sessionFactory.getCurrentSession().getNamedQuery("getPosts");
			} else {
				query = this.sessionFactory.getCurrentSession().getNamedQuery("getPostsByBest");
			}
		} else {
			if (filter.getChrono().equals("new")) {
				query = this.sessionFactory.getCurrentSession().getNamedQuery("getPostsWithLanguage")
						.setString("language", filter.getLanguage());
			} else {
				query = this.sessionFactory.getCurrentSession().getNamedQuery("getPostsWithLanguageByBest")
						.setString("language", filter.getLanguage());
			}
		}

		posts = query.setResultTransformer(Transformers.aliasToBean(Post.class)).setFirstResult(filter.getStart())
				.setMaxResults(5).list();
		return posts;
	}

	@Override
	public void addPost(Post post) {
		long id = (long) this.sessionFactory.getCurrentSession().save(post);
		Vote vote = new Vote(post.getUser().getId(), id, 0, 1);
		this.sessionFactory.getCurrentSession().save(vote);
	}

	@Override
	public void upvotePost(Vote vote) {
		savePostVote(vote);
	}

	@Override
	public void downvotePost(Vote vote) {
		savePostVote(vote);
	}

	private void savePostVote(Vote vote) {
		Vote existingVote = (Vote) this.sessionFactory.getCurrentSession().getNamedQuery("getVoteByPostIdAndUserId")
				.setParameter("postId", vote.getPostId()).setParameter("userId", vote.getUserId())
				.setResultTransformer(Transformers.aliasToBean(Vote.class)).uniqueResult();
		if (existingVote != null) {
			existingVote.setValue(vote.getValue());
			this.sessionFactory.getCurrentSession().update(existingVote);
		} else {
			this.sessionFactory.getCurrentSession().save(vote);
		}
	}

}
