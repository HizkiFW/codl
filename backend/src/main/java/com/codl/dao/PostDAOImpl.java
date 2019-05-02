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
		Query query = this.sessionFactory.getCurrentSession().getNamedQuery("getPosts").setResultTransformer(Transformers.aliasToBean(Post.class));
		return query.list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getPostsWithFilter(Filter filter) {
		Query query;
		List<Post> posts;
		if (!filter.getLanguage().equals("all")) {
			query = this.sessionFactory.getCurrentSession().getNamedQuery("getPostsWithLanguage").setString("language",
					filter.getLanguage());
		} else {
			query = this.sessionFactory.getCurrentSession().getNamedQuery("getPosts");
		}

		posts = query.setResultTransformer(Transformers.aliasToBean(Post.class)).list();
		if (filter.getChrono().equals("best")) {
			posts = (List<Post>) posts.stream().sorted(Comparator.comparing(Post::getVoteCount).reversed())
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
