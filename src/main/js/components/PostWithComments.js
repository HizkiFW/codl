import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Comments from "./Comments";
import { fetchComments } from "../actions/commentActions";
import styled from "styled-components";
import Spinner from "./Spinner";

class PostWithComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false // will be true when ajax request is running
    };
  }

  componentWillMount() {
    this.setState({ loading: true }, () => {
      this.props.fetchComments(this.props.match.params.postId).then(() =>
        this.setState({
          loading: false
        })
      );
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <PostWithCommentsWrapper>
        <Post data={this.props.post} isExpanded={true} />
        {loading ? (
          <Spinner />
        ) : (
          <Comments
            postId={this.props.match.params.postId}
            data={this.props.comments}
          />
        )}
      </PostWithCommentsWrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.items.find(x => x.id === Number(props.match.params.postId)),
  comments: state.comments.items
});

const mapDispatchToProps = {
  fetchComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostWithComments);

const PostWithCommentsWrapper = styled.div`
  margin-top: 13px;
`;
