package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Tag;

@Repository
public class TagDAOImpl implements TagDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Tag> getAllTags() {
		Query query = this.sessionFactory.getCurrentSession().getNamedQuery("getTags")
				.setResultTransformer(Transformers.aliasToBean(Tag.class));
		return query.list();
	}

}
