package com.codl.web;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.codl.models.Comment;
import com.codl.models.Vote;
import com.codl.service.CommentManager;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/")
@Controller
public class CommentWebServices {

	@Autowired
	private CommentManager commentManager;

	@POST
	@Path("getComments")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String getComments(long postId) {
		String response = "";
		List<Comment> comments = commentManager.getComments(postId);
		ObjectMapper Obj = new ObjectMapper();

		try {
			response = Obj.writeValueAsString(comments);
		}

		catch (IOException e) {
			e.printStackTrace();
		}

		return response;
	}

	@POST
	@Path("submitComment")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addComment(Comment comment) {
		commentManager.addComment(comment);
	}

	@POST
	@Path("upvoteComment")
	@Consumes(MediaType.APPLICATION_JSON)
	public void upvoteComment(Vote vote) {
		commentManager.upvoteComment(vote);
	}
	
	@POST
	@Path("removeVoteComment")
	@Consumes(MediaType.APPLICATION_JSON)
	public void removeVoteComment(Vote vote) {
		commentManager.removeVoteComment(vote);
	}

}
