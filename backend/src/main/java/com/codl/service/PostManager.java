package com.codl.service;

import java.util.List;

import com.codl.models.Post;
import com.codl.models.Vote;
import com.codl.models.utils.Filter;

public interface PostManager {
	
	 public List<Post> getAllPosts(Filter filter);
	 public Post addPost(Post post);
	 public void upvotePost(Vote vote);
	 public void downvotePost(Vote vote);
	 public void removeVotePost(Vote vote);

}
