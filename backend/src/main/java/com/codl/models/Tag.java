package com.codl.models;

import javax.persistence.Entity;

@Entity
public class Tag {
	
	private String language;
	private long count;
	
	public Tag(String language, long count) {
		this.language = language;
		this.count = count;
	}
	
	public Tag() {
		
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}
	

}
