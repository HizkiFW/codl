package com.codl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(method = { RequestMethod.OPTIONS, RequestMethod.GET }, path = { "/post/**", "/t/**", "/submit/**",
			"/" })
	public String index() {
		return "forward:/index.html";
	}

}
