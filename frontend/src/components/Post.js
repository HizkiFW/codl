import React, { Component } from 'react'
import styled from 'styled-components';
import Code from './Code';
import Upvote from './Upvote';

export default class Post extends Component {

  render() {
    return (
      <PostWrapper>
        <div className="d-flex bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <h4>{this.props.data.language} No.{this.props.data.id} / {this.props.data.title}</h4>
          posted by {this.props.data.user.username}, {this.props.data.dateCreation}
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <Upvote
              //voteStatus={user.votes[postData.id] || 0}
              voteStatus={0}
              upvoteContent={<i className="upvote-icon fa fa-arrow-up"></i>}
              afterContent={<span className="upvote-count">{this.props.data.voteCount}</span>}
              downvoteContent={<i className="downvote-icon fa fa-arrow-down"></i>}
              //afterContent={<span className="upvote-count">{postData.upvotes}</span>}
              //shouldAllow={() => user.isLoggedIn}
              shouldAllow={() => true}
              onDisallowed={() => this.errorMessage('You have to log in!')}
            //onUpvote={() => this.upvotePost(postData.id)}
            //onDownvote={() => this.downvotePost(postData.id)}
            //onRemoveVote={() => this.removeVote(postData.id)}
            />
          </div></div>
        <Code code={this.props.data.code} language={this.props.data.language} />
        <span>{this.props.data.description}</span>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        margin-bottom: 10px;
        background:white;
        padding: 15px 15px;
`