package com.codl.dao;

import java.util.List;

import org.hibernate.Query;
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
		List<Vote> votes;
		Query query = this.sessionFactory.getCurrentSession().getNamedQuery("checkIfUserExists")
				.setParameter("username", oauthUser.getLogin());

		boolean userExists = (Boolean) query.uniqueResult();

		if (userExists) {
			user = (User) this.sessionFactory.getCurrentSession().getNamedQuery("getUserByLogin")
					.setParameter("username", oauthUser.getLogin())
					.setResultTransformer(Transformers.aliasToBean(User.class)).uniqueResult();
			votes = this.sessionFactory.getCurrentSession().getNamedQuery("getVotesByUserId")
					.setParameter("userId", user.getId()).setResultTransformer(Transformers.aliasToBean(Vote.class))
					.list();
			user.setVotes(votes);
			/*
			 * user.setUrlAvatar(oauthUser.getAvatar_url());
			 * user.setName(oauthUser.getName());
			 * this.sessionFactory.getCurrentSession().update(user);
			 */
		} else {
			user = new User(oauthUser);
			this.sessionFactory.getCurrentSession().save(user);
		}

		return user;
	}

}
