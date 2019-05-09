package com.codl.service;

import com.codl.models.OAuthCode;
import com.codl.models.User;

public interface UserManager {

	public User signIn(OAuthCode OAuthcode);

}
