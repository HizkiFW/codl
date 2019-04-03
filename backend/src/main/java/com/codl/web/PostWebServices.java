package com.codl.web;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.codl.models.Post;
import com.codl.service.PostManager;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/")
@Controller
public class PostWebServices {

	@Autowired
	private PostManager postManager;

	@GET
	@Path("getPosts")
	@Produces(MediaType.APPLICATION_JSON)
	public String getPosts() {
		String response = "";
		List<Post> allPosts = postManager.getAllPosts();
		ObjectMapper Obj = new ObjectMapper();

		try {
			response = Obj.writeValueAsString(allPosts);
		}

		catch (IOException e) {
			e.printStackTrace();
		}

		return response;

	}

	@POST
	@Path("getPost")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String getPost(long id) {
		System.out.println("LOOOOOOOOOOOOOOOL" + id);
		String response = "";
		Post post = postManager.getPost(id);
		ObjectMapper Obj = new ObjectMapper();

		try {
			response = Obj.writeValueAsString(post);
		}

		catch (IOException e) {
			e.printStackTrace();
		}

		return response;
	}

	@POST
	@Path("submitPost")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addPost(Post post) {
		postManager.addPost(post);
	}

	@POST
	@Path("upvotePost")
	@Consumes(MediaType.APPLICATION_JSON)
	public void upvotePost(long id) {
		postManager.upvotePost(id);
	}

	@POST
	@Path("downvotePost")
	@Consumes(MediaType.APPLICATION_JSON)
	public void downvotePost(long id) {
		postManager.downvotePost(id);
	}

}