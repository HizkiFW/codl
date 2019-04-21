package com.codl.dao;

import java.util.List;

import com.codl.models.Post;

public interface PostDAO {

    public void addPost(Post post);
    public List<Post> getAllPosts(String language);
    public void upvotePost(long id);
    public void downvotePost(long id);
    
}
