package com.codl.dao;

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
			user.setUrlAvatar(oauthUser.getAvatar_url());
			user.setName(oauthUser.getName());
			this.sessionFactory.getCurrentSession().update(user);
		} else {
			user = new User(oauthUser);
			this.sessionFactory.getCurrentSession().save(user);
		}

		return user;
	}

}
