package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Comment;
import com.codl.models.Vote;

@Repository
public class CommentDAOImpl implements CommentDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Comment> getComments(long postId) {
		Query query = this.sessionFactory.getCurrentSession().getNamedQuery("getComments");
		query.setParameter("postId", postId);
		return query.setResultTransformer(Transformers.aliasToBean(Comment.class)).list();

	}

	@Override
	public void addComment(Comment comment) {
		long id = (long) this.sessionFactory.getCurrentSession().save(comment);
		Vote vote = new Vote(comment.getUser().getId(), 0, id, 1);
		this.sessionFactory.getCurrentSession().save(vote);
	}

	@Override
	public void upvoteComment(Vote vote) {
		this.sessionFactory.getCurrentSession().save(vote);
	}

	@Override
	public void downvoteComment(Vote vote) {
		this.sessionFactory.getCurrentSession().save(vote);

	}

}
