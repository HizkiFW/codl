import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchPosts, fetchMorePosts } from "../actions/postActions";
import ChronoFilter from "./ChronoFilter";
import InfiniteScroll from "react-infinite-scroll-component";

class Posts extends Component {
  state = {
    start: 0
  };

  componentWillMount() {
    this.props.fetchPosts({
      start: this.state.start,
      language: "all",
      chrono: "new"
    });
  }

  fetchMoreData = () => {
    this.setState({
      start: this.props.posts.length
    });
    this.props.fetchMorePosts({
      start: this.state.start,
      language: "all",
      chrono: "new"
    });
  };

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
        <InfiniteScroll
          dataLength={this.props.posts.length}
          next={this.fetchMoreData}
          hasMore={this.props.hasMore}
          loader={<h4 className="text-center">Loading...</h4>}
        >
          {postItems}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  hasMore: state.posts.hasMore
});

const mapDispatchToProps = {
  fetchPosts,
  fetchMorePosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

const PostsWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
`;
