package com.codl.utils;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({ "code", "field", "message" })
public class ErrorInfo {

	private String status;

	private String field;

	private String message;

	public ErrorInfo(String status, String field, String message) {
		this.status = status;
		this.field = field;
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
