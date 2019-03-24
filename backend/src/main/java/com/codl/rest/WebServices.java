package com.codl.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.codl.models.Post;

@Path("/")
public class WebServices {
	
	@GET
	@Path("/Posts")
	@Produces(MediaType.APPLICATION_JSON)
	public Post getPosts() {
		
		Post post = null;
		return post;
		
	}

}