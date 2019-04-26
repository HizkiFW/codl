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
        <SortWrapper>
          <a class="sort-by-link selected" href="/">NEWEST</a>
          <span class="separator"></span>
          <a class="sort-by-link " href="/top/week">POPULAR</a>
        </SortWrapper>
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

const SortWrapper = styled.div`
text-align: center;
font-family: Arial;
height: 45px;
padding:10px 0px

a {
  text-decoration: none;
  color: inherit;
}

.sort-by-link {
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.95em;
}

.sort-by-link.selected {
    background: #003ee6;
    color: white;
    border: 1px solid #0f0f0f;
    border-radius: 2px;
}

.separator {
    border-left: 2px solid #a7a7a7;
    display: inline-block;
    margin: 0px 7px;
    height: 15px;
}
`