package com.codl.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.stereotype.Service;

import com.codl.models.OAuthCode;
import com.codl.models.User;

@Service
public class UserManagerImpl implements UserManager {

	public static final String GITHUB_OAUTH = "https://github.com/login/oauth/access_token";
	public static String CLIENT_ID = "21dde3092c2673fd5e40";
	public static String CLIENT_SECRET = "15a74c6c18127778c368df9fd114225017bbb5e7";

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
		URL url = new URL(GITHUB_OAUTH);
		HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

		con.setRequestMethod("POST");

		con.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
		wr.writeBytes("client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + code);
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
