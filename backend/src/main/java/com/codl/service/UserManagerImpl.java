package com.codl.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.UserDAO;
import com.codl.models.User;
import com.codl.models.oauth.OAuthAccessToken;
import com.codl.models.oauth.OAuthCode;
import com.codl.models.oauth.OAuthUser;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@Service
@PropertySource("classpath:application.properties")
public class UserManagerImpl implements UserManager {

	@Autowired
	Environment env;

	@Autowired
	private UserDAO userDAO;

	@Override
	@Transactional
	public User signIn(OAuthCode OAuthcode) {
		OAuthAccessToken oauth = null;
		OAuthUser oauthUser = null;
		User user = null;
		try {
			oauth = fetchOauthTokenWithCode(OAuthcode.getCode());
		} catch (Exception e) {
			e.printStackTrace();
		}

		if (oauth != null) {
			try {
				oauthUser = fetchOauthUserData(oauth.getaccess_token());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (oauthUser != null) {
			user = getUser(oauthUser);
		}

		return user;
	}

	private User getUser(OAuthUser oauthUser) {
		return userDAO.getUser(oauthUser);

	}

	private OAuthUser fetchOauthUserData(String accessToken) throws Exception {
		URL url = new URL(env.getProperty("oauth.url.user"));
		HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

		con.addRequestProperty("Accept", "application/json");
		con.setRequestProperty("Authorization", "token " + accessToken);
		int responseCode = con.getResponseCode();
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		ObjectMapper mapper = new ObjectMapper();
		OAuthUser oAuthUser = mapper.readValue(response.toString(), OAuthUser.class);

		System.out.println(response.toString());

		return oAuthUser;
	}

	private OAuthAccessToken fetchOauthTokenWithCode(String code) throws Exception {
		URL url = new URL(env.getProperty("oauth.url.access.token"));
		HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

		con.setRequestMethod("POST");
		con.addRequestProperty("Accept", "application/json");

		con.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
		wr.writeBytes("client_id=" + env.getProperty("oauth.clientId") + "&client_secret="
				+ env.getProperty("oauth.secretClientId") + "&code=" + code);
		wr.flush();
		wr.close();

		int responseCode = con.getResponseCode();
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		ObjectMapper mapper = new ObjectMapper();
		OAuthAccessToken oAuthAccessToken = mapper.readValue(response.toString(), OAuthAccessToken.class);

		// print result
		System.out.println(response.toString());

		return oAuthAccessToken;
	}

}
