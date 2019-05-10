package com.codl.models.oauth;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OAuthUser {

	private String login;
	private String id;
	private String avatar_url;
	private String name;
	private String email;

	public OAuthUser() {

	}

	public OAuthUser(String login, String id, String avatar_url, String name, String email) {
		super();
		this.login = login;
		this.id = id;
		this.avatar_url = avatar_url;
		this.name = name;
		this.email = email;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAvatar_url() {
		return avatar_url;
	}

	public void setAvatar_url(String avatar_url) {
		this.avatar_url = avatar_url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
