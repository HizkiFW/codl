package com.codl.service;

import java.util.List;

import com.codl.models.Post;
import com.codl.models.utils.Filter;

public interface PostManager {
	
	 public List<Post> getAllPosts(Filter filter);
	 public void addPost(Post post);
	 public void upvotePost(long id);
	 public void downvotePost(long id);

}
