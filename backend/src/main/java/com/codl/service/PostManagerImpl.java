package com.codl.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.PostDAO;
import com.codl.models.Post;
import com.codl.models.Vote;
import com.codl.models.utils.Filter;
import com.codl.utils.ErrorInfo;
import com.codl.utils.InvalidInputException;

@Service
public class PostManagerImpl implements PostManager {

	@Autowired
	private PostDAO postDAO;

	@Override
	@Transactional
	public List<Post> getAllPosts(Filter filter) {
		return postDAO.getPostsWithFilter(filter);
	}

	@Override
	@Transactional
	public Post addPost(Post post) {

		List<ErrorInfo> errList = new ArrayList<ErrorInfo>();
		if (post.getDescription().isEmpty()) {
			ErrorInfo err = new ErrorInfo("400", "Descritption", "pas de description !!");
			errList.add(err);
		}

		if (!errList.isEmpty()) {
			throw new InvalidInputException(errList);
		}
		return postDAO.addPost(post);
	}

	@Override
	@Transactional
	public void upvotePost(Vote vote) {
		vote.setValue(1);
		postDAO.upvotePost(vote);
	}

	@Override	
	@Transactional
	public void downvotePost(Vote vote) {
		vote.setValue(-1);
		postDAO.downvotePost(vote);
	}
	
	@Override	
	@Transactional
	public void removeVotePost(Vote vote) {
		vote.setValue(0);
		postDAO.removeVotePost(vote);
	}

}
