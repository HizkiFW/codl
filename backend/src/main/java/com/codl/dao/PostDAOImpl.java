package com.codl.dao;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Filter;
import com.codl.models.Post;

@Repository
public class PostDAOImpl implements PostDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getAllPosts() {
		String SQLQuery = "select P.id as id, P.code as code, P.dateCreation as dateCreation, P.description as description, P.language as language, P.title as title, P.voteCount as voteCount, P.user as user, (select count(1) from Comment C where C.postId = P.id) as numberOfComments from Post P order by P.dateCreation desc";
		Query query = this.sessionFactory.getCurrentSession().createQuery(SQLQuery)
				.setResultTransformer(Transformers.aliasToBean(Post.class));
		return query.list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getPostsWithFilter(Filter filter) {
		String SQLQuery;
		Query query;
		List<Post> posts;
		if (!filter.getLanguage().equals("all")) {
			SQLQuery = "select P.id as id, P.code as code, P.dateCreation as dateCreation, P.description as description, P.language as language, P.title as title, P.voteCount as voteCount, P.user as user, (select count(1) from Comment C where C.postId = P.id) as numberOfComments from Post P where P.language = :language";
			query = this.sessionFactory.getCurrentSession().createQuery(SQLQuery)
					.setResultTransformer(Transformers.aliasToBean(Post.class));
			query.setParameter("language", filter.getLanguage());
		} else {
			SQLQuery = "select P.id as id, P.code as code, P.dateCreation as dateCreation, P.description as description, P.language as language, P.title as title, P.voteCount as voteCount, P.user as user, (select count(1) from Comment C where C.postId = P.id) as numberOfComments from Post P";
			query = this.sessionFactory.getCurrentSession().createQuery(SQLQuery)
					.setResultTransformer(Transformers.aliasToBean(Post.class));
		}
		
		if (filter.getChrono().equals("new")) {
			posts = (List<Post>) query.list().stream()
					  .sorted(Comparator.comparing(Post::getDateCreation).reversed())
					  .collect(Collectors.toList());
		} else {
			posts = (List<Post>) query.list().stream()
					  .sorted(Comparator.comparing(Post::getVoteCount).reversed())
					  .collect(Collectors.toList());
		}
		return posts;
	}

	@Override
	public void addPost(Post post) {
		this.sessionFactory.getCurrentSession().save(post);
	}

	@Override
	public void upvotePost(long id) {
		Post post = (Post) this.sessionFactory.getCurrentSession().get(Post.class, id);

		if (post != null) {
			post.setVoteCount(post.getVoteCount() + 1);
			this.sessionFactory.getCurrentSession().save(post);
		}
	}

	@Override
	public void downvotePost(long id) {
		Post post = (Post) this.sessionFactory.getCurrentSession().get(Post.class, id);

		if (post != null) {
			post.setVoteCount(post.getVoteCount() - 1);
			this.sessionFactory.getCurrentSession().save(post);
		}
	}

}
