package com.codl.rest;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.codl.models.Post;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/rest")
public class WebServices {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getPosts() {
		String response="";

		Post post = new Post("Title", "<html>Hello World</html>", "This si the first code");
		ObjectMapper Obj = new ObjectMapper();

		try {

			 response = Obj.writeValueAsString(post);

		}

		catch (IOException e) {
			e.printStackTrace();
		}

	return response;

}

}