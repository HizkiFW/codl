package com.codl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codl.dao.TagDAO;
import com.codl.models.Tag;

@Service
public class TagManagerImpl implements TagManager {

	@Autowired
	private TagDAO tagDAO;

	@Override
	@Transactional
	public List<Tag> getAllTags() {
		return tagDAO.getAllTags();
	}

}
