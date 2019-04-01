import React, { Component } from 'react'
import styled from 'styled-components';
import Code from './Code';
import Upvote from './Upvote';
import { connect } from 'react-redux';
import { upvotePost, downvotePost } from '../actions/postActions';

class Post extends Component {

  upvotePost(id) {
    this.props.upvotePost(id);
  }

  downvotePost(id) {
    this.props.downvotePost(id);
  }

  removeVote(id) {
    console.log('removevote');
  }

  render() {
    return (
      <PostWrapper>
        <div className="d-flex bd-highlight mb-3">
          <div className="bd-highlight">
            <h4><span className="language">#{this.props.data.language}</span> {this.props.data.title}</h4>
            <span className="author">{this.props.data.user.username}・{this.props.data.dateCreation}</span>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <Upvote
              //voteStatus={user.votes[postData.id] || 0}
              voteStatus={0}
              upvoteContent={<i className="upvote-icon fa fa-arrow-up"></i>}
              afterContent={<span className="upvote-count">{this.props.data.voteCount}</span>}
              downvoteContent={<i className="downvote-icon fa fa-arrow-down"></i>}
              //shouldAllow={() => user.isLoggedIn}
              shouldAllow={() => true}
              onDisallowed={() => this.errorMessage('You have to log in!')}
              onUpvote={() => this.upvotePost(this.props.data.id)}
              onDownvote={() => this.downvotePost(this.props.data.id)}
              onRemoveVote={() => this.removeVote(this.props.data.id)}
            />
          </div></div>
        <Code code={this.props.data.code} language={this.props.data.language} />
        <span>{this.props.data.description}</span>
      </PostWrapper>
    )
  }
}

const mapDispatchToProps = {
  upvotePost,
  downvotePost
};

export default connect(null, mapDispatchToProps)(Post);



const PostWrapper = styled.div`
margin-bottom: 10px;
background:white;
padding: 15px 15px;
  .author {
    color:#666;
    font-size:17px;
  }
  .language {
    background: #091b47;
    color: #b2ffe1;
    border-radius: 4px;
    font-size: 15px;
    padding: 2px 6px 3px;
    vertical-align: 4px;
  }
`