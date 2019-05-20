package com.codl.utils;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class InvalidInputExceptionMapper implements ExceptionMapper<InvalidInputException> {

	@Override
	public Response toResponse(InvalidInputException e) {
		ResponseBuilder rb = Response.status(Status.BAD_REQUEST);

		rb.entity(e.getErrors());
		return rb.build();
	}

}
