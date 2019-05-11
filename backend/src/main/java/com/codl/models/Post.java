package com.codl.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="POST")
public class Post implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	@Column(name="TITLE", nullable=false)
	private String title;
	@Column(name="CODE", nullable=false)
	private String code;
	@Column(name="DESCRIPTION")
	private String description;
	@Column(name="LANGUAGE", nullable=false)
	private String language;
	@Transient
	private long voteCount;
	@ManyToOne
	@JoinColumn(name="USER_ID", nullable=false)
	private User user;
	@Column(name="DATE_CREATION", nullable=false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
	private Date dateCreation;
	@Transient
	private long numberOfComments;

	public Post(String title, String code, String description, String language, long voteCount, User user, Date dateCreation, long numberOfComments) {
		this.title = title;
		this.code = code;
		this.description = description;
		this.language = language;
		this.voteCount = voteCount;
		this.user = user;
		this.dateCreation = dateCreation;
		this.numberOfComments = numberOfComments;
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

	public long getVoteCount() {
		return voteCount;
	}

	public void setVoteCount(long voteCount) {
		this.voteCount = voteCount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public long getNumberOfComments() {
		return numberOfComments;
	}

	public void setNumberOfComments(long numberOfComments) {
		this.numberOfComments = numberOfComments;
	}

}
