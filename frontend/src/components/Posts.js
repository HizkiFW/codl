import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';
import ChronoFilter from "./ChronoFilter"

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <PostsWrapper key={post.id}>
        <Link to={`/post/${post.id}`}>
          <Post data={post} isHidden={false} />
        </Link>
      </PostsWrapper>
    ));
    return (
      <div>
        <ChronoFilter lang="all" sortByNew={true} />
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
    outline:none;
  }
`