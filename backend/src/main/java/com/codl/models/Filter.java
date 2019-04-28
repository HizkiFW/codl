package com.codl.models;

public class Filter {

	private String language;
	private String chrono;

	public Filter() {

	}

	public Filter(String language, String chrono) {
		this.language = language;
		this.chrono = chrono;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getChrono() {
		return chrono;
	}

	public void setChrono(String chrono) {
		this.chrono = chrono;
	}

}
