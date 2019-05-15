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

@Entity
@Table(name = "COMMENT")
public class Comment implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	@Column(name = "TEXT", columnDefinition = "text", nullable = false)
	private String text;
	@ManyToOne
	@JoinColumn(name = "USER_ID", nullable = false)
	private User user;
	@Column(name = "DATE_CREATION", nullable = false)
	private Date dateCreation;
	@Column(name = "POST_ID")
	private long postId;
	@Transient
	private long voteCount;

	public Comment(String text, User user, Date dateCreation, long voteCount, long postId) {
		this.text = text;
		this.user = user;
		this.dateCreation = dateCreation;
		this.voteCount = voteCount;
		this.postId = postId;
	}

	public Comment() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public User getUser() {
		return user;
	}

	public void setUserId(User user) {
		this.user = user;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public long getVoteCount() {
		return voteCount;
	}

	public void setVoteCount(long voteCount) {
		this.voteCount = voteCount;
	}

}
