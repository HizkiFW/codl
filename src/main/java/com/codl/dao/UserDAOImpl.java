package com.codl.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.codl.models.User;
import com.codl.models.Vote;
import com.codl.models.oauth.OAuthUser;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public User getUser(OAuthUser oauthUser) {
		User user;
		List<Vote> votes = new ArrayList<Vote>();
		boolean userExists = (boolean) this.sessionFactory.getCurrentSession().getNamedQuery("checkIfUserExists")
				.setParameter("username", oauthUser.getLogin()).getSingleResult();

		if (userExists) {
			user = (User) this.sessionFactory.getCurrentSession().getNamedQuery("getUserByLogin")
					.setParameter("username", oauthUser.getLogin())
					.setResultTransformer(Transformers.aliasToBean(User.class)).getSingleResult();

			votes = this.sessionFactory.getCurrentSession().getNamedQuery("getVotesByUserId")
					.setParameter("userId", user.getId()).setResultTransformer(Transformers.aliasToBean(Vote.class))
					.getResultList();

			user.setVotes(votes);
			/*
			 * user.setUrlAvatar(oauthUser.getAvatar_url());
			 * user.setName(oauthUser.getName());
			 * this.sessionFactory.getCurrentSession().update(user);
			 */
		} else {
			user = new User(oauthUser);
			user.setVotes(votes);
			this.sessionFactory.getCurrentSession().save(user);
		}

		return user;
	}

}
