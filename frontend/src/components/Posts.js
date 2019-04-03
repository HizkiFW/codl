import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchPost } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <PostsWrapper key={post.id}>
        <Link to={'/comments/' + post.id} onClick={() => { this.props.fetchPost(post.id) }}>
          <Post data={post} />
        </Link>
      </PostsWrapper>
    ));
    return (
      <div>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = {
  fetchPosts,
  fetchPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

const PostsWrapper = styled.div`
  a {
    text-decoration: none;
    color:inherit;
  }
`