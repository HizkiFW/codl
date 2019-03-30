package com.codl.service;

import java.util.List;

import com.codl.models.Post;

public interface PostManager {
	
	 public List<Post> getAllPosts();
	 public void addPost(Post post);

}
