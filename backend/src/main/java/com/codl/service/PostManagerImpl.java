package com.codl.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.PostDAO;
import com.codl.models.Post;
import com.codl.utils.ErrorInfo;
import com.codl.utils.InvalidInputException;

@Service
public class PostManagerImpl implements PostManager {

	@Autowired
	private PostDAO postDAO;

	@Override
	@Transactional
	public List<Post> getAllPosts(String language) {
		return postDAO.getAllPosts(language);
	}

	@Override
	@Transactional
	public void addPost(Post post) {
		
		if (post.getDescription().isEmpty()) {
			List<ErrorInfo> errList = new ArrayList<ErrorInfo>();
			ErrorInfo err = new ErrorInfo("400", "Descritption", "pas de description !!");
			errList.add(err);
			throw new InvalidInputException(errList);
		}
		Date now = new Date();
		post.setVoteCount(0);
		post.setDateCreation(now);
		postDAO.addPost(post);
	}

	@Override
	@Transactional
	public void upvotePost(long id) {
		postDAO.upvotePost(id);
	}

	@Override
	@Transactional
	public void downvotePost(long id) {
		postDAO.downvotePost(id);
	}

}
