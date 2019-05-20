package com.codl.service;

import com.codl.models.User;
import com.codl.models.oauth.OAuthCode;

public interface UserManager {

	public User signIn(OAuthCode OAuthcode);

}
