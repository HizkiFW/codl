package com.codl.dao;

import java.util.List;

import com.codl.models.Post;
import com.codl.models.Vote;
import com.codl.models.utils.Filter;

public interface PostDAO {

    public void addPost(Post post);
    public List<Post> getPostsWithFilter(Filter filter);
    public void upvotePost(Vote vote);
    public void downvotePost(Vote vote);
    
}
