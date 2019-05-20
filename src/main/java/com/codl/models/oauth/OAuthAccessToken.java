package com.codl.models.oauth;

public class OAuthAccessToken {

	private String access_token;
	private String token_type;
	private String scope;

	public OAuthAccessToken() {

	}

	public OAuthAccessToken(String access_token, String token_type, String scope) {

		this.access_token = access_token;
		this.token_type = token_type;
		this.scope = scope;
	}

	public String getaccess_token() {
		return access_token;
	}

	public void setaccess_token(String access_token) {
		this.access_token = access_token;
	}

	public String gettoken_type() {
		return token_type;
	}

	public void settoken_type(String token_type) {
		this.token_type = token_type;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

}
