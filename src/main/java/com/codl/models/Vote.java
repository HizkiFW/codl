package com.codl.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "VOTE")
public class Vote implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	@Column(name = "USER_ID", nullable=false)
	private long userId;
	@Column(name = "POST_ID")
	private long postId;
	@Column(name = "COMMENT_ID")
	private long commentId;
	@Column(name = "VALUE", nullable=false)
	private long value;

	public Vote(long id, long userId, long postId, long commentId, long value) {
		super();
		this.id = id;
		this.userId = userId;
		this.postId = postId;
		this.commentId = commentId;
		this.value = value;
	}
	
	public Vote(long userId, long postId, long commentId, long value) {
		super();
		this.userId = userId;
		this.postId = postId;
		this.commentId = commentId;
		this.value = value;
	}
	public Vote() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public long getCommentId() {
		return commentId;
	}

	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}

	public long getValue() {
		return value;
	}

	public void setValue(long value) {
		this.value = value;
	}
}
