package com.codl.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.codl.models.Comment;

@Repository
public interface CommentDAO {

	public List<Comment> getComments(long postId);
	public void addComment(Comment comment);
	public void upvoteComment(long id);
	
}
