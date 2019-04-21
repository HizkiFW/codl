package com.codl.service;

import java.util.List;

import com.codl.models.Comment;

public interface CommentManager {
	
	public List<Comment> getComments(long postId);
	public void addComment(Comment comment);
	public void upvoteComment(long id);

}
