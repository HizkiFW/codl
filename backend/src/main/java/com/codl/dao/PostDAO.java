package com.codl.dao;

import java.util.List;

import com.codl.models.Post;
import com.codl.models.Vote;
import com.codl.models.utils.Filter;

public interface PostDAO {

    public Post addPost(Post post);
    public List<Post> getPostsWithFilter(Filter filter);
    public void upvotePost(Vote vote);
    public void downvotePost(Vote vote);
    public void removeVotePost(Vote vote);
}
