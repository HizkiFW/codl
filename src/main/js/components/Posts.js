import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/postActions";
import ChronoFilter from "./ChronoFilter";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      loading: false // will be true when ajax request is running
    };
  }

  componentWillMount() {
    this.setState({ loading: true }, () => {
      this.props
        .fetchPosts(
          {
            start: this.state.start,
            language: "all",
            chrono: "new"
          },
          ""
        )
        .then(() =>
          this.setState({
            loading: false
          })
        );
    });
  }

  fetchMoreData = () => {
    this.setState({
      start: this.props.posts.length
    });
    this.props.fetchPosts(
      {
        start: this.state.start,
        language: "all",
        chrono: "new"
      },
      "MORE"
    );
  };

  render() {
    const { loading } = this.state;
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
        {loading ? (
          <Spinner />
        ) : (
          <InfiniteScroll
            dataLength={this.props.posts.length}
            next={this.fetchMoreData}
            hasMore={this.props.hasMore}
            loader={<h4 className="text-center">Loading...</h4>}
          >
            {postItems}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  hasMore: state.posts.hasMore
});

const mapDispatchToProps = {
  fetchPosts
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
