package com.codl.dao;

import java.util.Date;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.User;
import com.codl.models.oauth.OAuthUser;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public User getUser(OAuthUser oauthUser) {
		User user = null;
		Query query = this.sessionFactory.getCurrentSession().getNamedQuery("checkIfUserExists")
				.setParameter("username", oauthUser.getLogin());

		boolean userExists = (Boolean) query.uniqueResult();

		if (userExists) {
			user = (User) this.sessionFactory.getCurrentSession().getNamedQuery("getUserByLogin")
					.setParameter("username", oauthUser.getLogin())
					.setResultTransformer(Transformers.aliasToBean(User.class)).uniqueResult();
		} else {
			user = new User();
			user.setDateCreation(new Date());
			user.setEmail(oauthUser.getEmail());
			user.setName(oauthUser.getName());
			user.setUrlAvatar(oauthUser.getAvatar_url());
			user.setUsername(oauthUser.getLogin());
			this.sessionFactory.getCurrentSession().save(user);
		}

		return user;
	}

}
