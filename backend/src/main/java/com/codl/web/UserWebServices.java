package com.codl.web;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.codl.models.User;
import com.codl.models.oauth.OAuthCode;
import com.codl.service.UserManager;

@Path("/")
@Controller
public class UserWebServices {
	
	@Autowired
	private UserManager userManager;

	@POST
	@Path("signIn")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public User addPost(OAuthCode OAuthcode) {
		return userManager.signIn(OAuthcode);
	}
	
}
