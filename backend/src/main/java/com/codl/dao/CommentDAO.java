package com.codl.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.codl.models.Comment;
import com.codl.models.Vote;

@Repository
public interface CommentDAO {

	public List<Comment> getComments(long postId);
	public void addComment(Comment comment);
	public void upvoteComment(Vote vote);
	public void downvoteComment(Vote vote);
	
}
