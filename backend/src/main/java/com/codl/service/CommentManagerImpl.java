package com.codl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.CommentDAO;
import com.codl.models.Comment;
import com.codl.models.Vote;

@Service
public class CommentManagerImpl implements CommentManager {

	@Autowired
	private CommentDAO commentDAO;
	
	@Override
	@Transactional
	public List<Comment> getComments(long postId) {
		return commentDAO.getComments(postId);
	}
	
	@Override
	@Transactional
	public Comment addComment(Comment comment) {
		return commentDAO.addComment(comment);
	}
	
	@Override
	@Transactional
	public void upvoteComment(Vote vote) {
		vote.setValue(1);
		commentDAO.upvoteComment(vote);
	}
	
	@Override
	@Transactional
	public void removeVoteComment(Vote vote) {
		vote.setValue(0);
		commentDAO.removeVoteComment(vote);
	}
}
