package com.codl.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="POST")
public class Post implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="POST_ID")
	private long id;
	@Column(name="TITLE")
	private String title;
	@Column(name="CODE")
	private String code;
	@Column(name="DESCRIPTION")
	private String description;
	@Column(name="LANGUAGE")
	private String language;
	@Column(name="VOTE_COUNT")
	private Integer voteCount;
	@Column(name="USER_ID")
	private long userId;

	public Post(String title, String code, String description, String language, Integer voteCount, long userId) {
		this.title = title;
		this.code = code;
		this.description = description;
		this.language = language;
		this.voteCount = voteCount;
		this.userId = userId;
	}
	
	public Post() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public Integer getVoteCount() {
		return voteCount;
	}

	public void setVoteCount(Integer voteCount) {
		this.voteCount = voteCount;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

}
