package com.codl.services;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.codl.models.Post;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/")
public class WebServices {

	@GET
	@Path("getPosts")
	@Produces(MediaType.APPLICATION_JSON)
	public String getPosts() {
		String response="";
		Post[] posts = new Post[2];
		posts[0] = new Post(1, "Title1", "<html>Hello World</html>", "This si the first code");
		posts[1] = new Post(2, "Title2", "<html>Hello bitch</html>", "This si the second code");
		
		ObjectMapper Obj = new ObjectMapper();

		try {

			 response = Obj.writeValueAsString(posts);

		}

		catch (IOException e) {
			e.printStackTrace();
		}

	return response;

}

}