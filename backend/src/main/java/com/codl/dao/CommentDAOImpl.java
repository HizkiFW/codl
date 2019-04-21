package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Comment;

@Repository
public class CommentDAOImpl implements CommentDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Comment> getComments(long postId) {

		Query query = this.sessionFactory.getCurrentSession().createQuery("from Comment C where C.postId = :postId");
		query.setParameter("postId", postId);
		return query.list();

	}

	@Override
	public void addComment(Comment comment) {
		this.sessionFactory.getCurrentSession().save(comment);
	}

	@Override
	public void upvoteComment(long id) {
		Comment comment = (Comment) this.sessionFactory.getCurrentSession().get(Comment.class, id);

		if (comment != null) {
			comment.setVoteCount(comment.getVoteCount() + 1);
			this.sessionFactory.getCurrentSession().save(comment);
		}
	}

}
