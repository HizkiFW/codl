package com.codl.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.codl.models.oauth.OAuthUser;

@Entity
@Table(name = "USER")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	@Column(name = "NAME")
	private String name;
	@Column(name = "USERNAME")
	private String username;
	@Column(name = "EMAIL")
	private String email;
	@Column(name = "URL_AVATAR")
	private String urlAvatar;
	@Column(name = "DATE_CREATION")
	private Date dateCreation;
	@Transient
	private List<Vote> votes;

	public User() {

	}

	public User(OAuthUser oauthUser) {
		this.dateCreation = new Date();
		this.email = oauthUser.getEmail();
		this.name = oauthUser.getName();
		this.username = oauthUser.getLogin();
		this.urlAvatar = oauthUser.getAvatar_url();
	}

	public User(long id, String name, String username, String email, String urlAvatar, Date dateCreation, List<Vote> votes) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.urlAvatar = urlAvatar;
		this.dateCreation = dateCreation;
		this.votes = votes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
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

	public String getUrlAvatar() {
		return urlAvatar;
	}

	public void setUrlAvatar(String urlAvatar) {
		this.urlAvatar = urlAvatar;
	}

	public List<Vote> getVotes() {
		return votes;
	}

	public void setVotes(List<Vote> votes) {
		this.votes = votes;
	}
}
