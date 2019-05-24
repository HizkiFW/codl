package com.codl.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
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
		Query<Comment> query = this.sessionFactory.getCurrentSession().getNamedQuery("getComments");
		query.setParameter("postId", postId);
		return query.setResultTransformer(Transformers.aliasToBean(Comment.class)).getResultList();

	}

	@Override
	public Comment addComment(Comment comment) {
		long id = (long) this.sessionFactory.getCurrentSession().save(comment);
		Vote vote = new Vote(comment.getUser().getId(), comment.getPostId(), id, 1);
		this.sessionFactory.getCurrentSession().save(vote);
		comment.setId(id);
		return comment;
	}

	@Override
	public void deleteComment(long id) {
		this.sessionFactory.getCurrentSession().getNamedQuery("deleteVoteByCommentId").setParameter("commentId", id)
				.executeUpdate();
		this.sessionFactory.getCurrentSession().getNamedQuery("deleteComment").setParameter("commentId", id)
				.executeUpdate();
	}

	@Override
	public void upvoteComment(Vote vote) {
		saveCommentVote(vote);
	}

	@Override
	public void removeVoteComment(Vote vote) {
		saveCommentVote(vote);
	}

	private void saveCommentVote(Vote vote) {
		Vote existingVote = (Vote) this.sessionFactory.getCurrentSession().getNamedQuery("getVoteByCommentIdAndUserId")
				.setParameter("commentId", vote.getCommentId()).setParameter("userId", vote.getUserId())
				.setResultTransformer(Transformers.aliasToBean(Vote.class)).getResultList().stream().findFirst()
				.orElse(null);
		if (existingVote != null) {
			existingVote.setValue(vote.getValue());
			this.sessionFactory.getCurrentSession().update(existingVote);
		} else {
			this.sessionFactory.getCurrentSession().save(vote);
		}
	}

}
