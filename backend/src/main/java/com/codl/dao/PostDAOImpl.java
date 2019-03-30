package com.codl.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.Post;

@Repository
public class PostDAOImpl implements PostDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @SuppressWarnings("unchecked")
    @Override
    public List<Post> getAllPosts() {
        return this.sessionFactory.getCurrentSession().createQuery("from Post").list();
    }

    @Override
	public void addPost(Post post) {
    	this.sessionFactory.getCurrentSession().save(post);	
	}

}	
