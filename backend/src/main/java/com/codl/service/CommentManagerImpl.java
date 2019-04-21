package com.codl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.CommentDAO;
import com.codl.models.Comment;

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
	public void addComment(Comment comment) {
		commentDAO.addComment(comment);
	}
	
	@Override
	@Transactional
	public void upvoteComment(long id) {
		commentDAO.upvoteComment(id);
	}
}
