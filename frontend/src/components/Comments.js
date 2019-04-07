import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm';
import styled from 'styled-components';

class Comments extends Component {

  render() {
    const commentItems = this.props.data.map(comment => (
      <Comment key={comment.id} data={comment} />
    ));
    return (
      <CommentsWrapper>
        <CommentForm postId={this.props.postId} />
        {commentItems}
      </CommentsWrapper>
    )
  }
}

export default Comments;

const CommentsWrapper = styled.div`
background:white;
padding: 15px 15px;
margin-bottom:10px;
border-radius: 3px;
margin-right: 5px;
`