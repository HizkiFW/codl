package com.codl.models.utils;

public class Filter {

	private String language;
	private String chrono;
	private int start;

	public Filter() {

	}

	public Filter(String language, String chrono, int start) {
		this.language = language;
		this.chrono = chrono;
		this.start = start;
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

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

}
