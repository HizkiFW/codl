import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Comments from "./Comments";
import { fetchComments } from "../actions/commentActions";
import styled from "styled-components";

class PostWithComments extends Component {
  componentWillMount() {
    this.props.fetchComments(this.props.match.params.postId);
  }

  render() {
    return (
      <PostWithCommentsWrapper>
        <Post data={this.props.post} isHidden={true} />
        <Comments
          postId={this.props.match.params.postId}
          data={this.props.comments}
        />
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
