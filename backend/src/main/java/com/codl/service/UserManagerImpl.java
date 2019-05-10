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

import com.codl.models.User;
import com.codl.models.utils.OAuthCode;

@Configuration
@Service
@PropertySource("classpath:application.properties")
public class UserManagerImpl implements UserManager {

	@Autowired
	Environment env;

	@Override
	public User signIn(OAuthCode OAuthcode) {
		// TODO Auto-generated method stub
		try {
			fetchOauthTokenWithCode(OAuthcode.getCode());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	private void fetchOauthTokenWithCode(String code) throws Exception {
		URL url = new URL(env.getProperty("oauth.url"));
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

		// print result
		System.out.println(response.toString());
	}

}
