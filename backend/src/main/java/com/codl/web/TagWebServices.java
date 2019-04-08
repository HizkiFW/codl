package com.codl.web;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.codl.models.Tag;
import com.codl.service.TagManager;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/")
@Controller
public class TagWebServices {


	@Autowired
	private TagManager tagManager;

	@GET
	@Path("getTags")
	@Produces(MediaType.APPLICATION_JSON)
	public String getTags() {
		String response = "";
		List<Tag> allTags = tagManager.getAllTags();
		ObjectMapper Obj = new ObjectMapper();

		try {
			response = Obj.writeValueAsString(allTags);
		}

		catch (IOException e) {
			e.printStackTrace();
		}

		return response;

	}
	
}
