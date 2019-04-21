package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Post;

@Repository
public class PostDAOImpl implements PostDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getAllPosts(String language) {
		String SQLQuery;
		Query query;
		if (!language.isEmpty()) {
			SQLQuery = "select P.id as id, P.code as code, P.dateCreation as dateCreation, P.description as description, P.language as language, P.title as title, P.voteCount as voteCount, P.user as user, (select count(1) from Comment C where C.postId = P.id) as numberOfComments from Post P where P.language = :language";
			query = this.sessionFactory.getCurrentSession().createQuery(SQLQuery)
					.setResultTransformer(Transformers.aliasToBean(Post.class));
			query.setParameter("language", language);
		} else {
			SQLQuery = "select P.id as id, P.code as code, P.dateCreation as dateCreation, P.description as description, P.language as language, P.title as title, P.voteCount as voteCount, P.user as user, (select count(1) from Comment C where C.postId = P.id) as numberOfComments from Post P";
			query = this.sessionFactory.getCurrentSession().createQuery(SQLQuery)
					.setResultTransformer(Transformers.aliasToBean(Post.class));
		}
		return query.list();
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
