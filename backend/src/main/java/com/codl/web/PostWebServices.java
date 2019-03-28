package com.codl.web;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.GET;
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
		String response="";
		List<Post> allPosts = postManager.getAllPosts();
		/*Post[] posts = new Post[2];
		posts[0] = new Post("Title1", "<html>Hello World</html>", "This si the first code", "HTML", 10, 1);
		posts[1] = new Post("Title2", "<html>Hello bitch</html>", "This si the second code", "HTML", 2, 1);*/
		
		ObjectMapper Obj = new ObjectMapper();

		try {

			 response = Obj.writeValueAsString(allPosts);

		}

		catch (IOException e) {
			e.printStackTrace();
		}

	return response;

}

}