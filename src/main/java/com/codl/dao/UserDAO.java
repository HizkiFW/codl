package com.codl.dao;

import com.codl.models.User;
import com.codl.models.oauth.OAuthUser;

public interface UserDAO {

	public User getUser(OAuthUser oauthUser);
	
}
