package com.codl.models;

import javax.persistence.Entity;

@Entity
public class Tag {
	
	private String language;
	private Integer count;
	
	public Tag(String language, Integer count) {
		this.language = language;
		this.count = count;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
	

}
