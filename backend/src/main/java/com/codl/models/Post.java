package com.codl.models;

public class Post {

	public long id;
	public String title;
	public String code;
	public String description;

	public Post(long id, String title, String code, String description) {
		this.id = id;
		this.title = title;
		this.code = code;
		this.description = description;
	}

}
