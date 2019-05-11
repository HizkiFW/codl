package com.codl.service;

import java.util.List;

import com.codl.models.Comment;
import com.codl.models.Vote;

public interface CommentManager {
	
	public List<Comment> getComments(long postId);
	public void addComment(Comment comment);
	public void upvoteComment(Vote vote);
	public void downvoteComment(Vote vote);

}
