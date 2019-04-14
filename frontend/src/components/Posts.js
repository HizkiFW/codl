import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.fetchPosts();
    }
    else {
      this.props.fetchPosts(this.props.location.state.tag);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <PostsWrapper key={post.id}>
        <Link to={{
          pathname: '/comments/' + post.id,
          state: {
            postId: post.id
          }
        }}>
          <Post data={post} isHidden={false} />
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
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

const PostsWrapper = styled.div`
  a {
    text-decoration: none;
    color:inherit;
  }
`