import React, { Component } from 'react'
import styled from 'styled-components';
import TimeAgo from 'javascript-time-ago'
import Heart from './Heart';
import en from 'javascript-time-ago/locale/en'
import { connect } from 'react-redux';
import { upvoteComment } from '../actions/commentActions';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US');

class Comment extends Component {

  upvoteComment(id) {
    this.props.upvoteComment(id);
  }

  removeVote(id) {
    console.log('removevote');
  }


  render() {
    let date = timeAgo.format(new Date(this.props.data.dateCreation), 'twitter');

    if (date === "") {
      date = "seconds ago"
    }
    return (
      <CommentWrapper>
        <div className="d-flex bd-highlight mb-3">
          <div className="bd-highlight">
            <span className="author">{this.props.data.user.username}</span>
          </div>
          <div className="ml-auto bd-highlight">
            <span className="date">{date}</span>
          </div>
        </div>
        <div className="text">{this.props.data.text}</div>
        <Heart
              //voteStatus={user.votes[postData.id] || 0}
              voteStatus={0}
              upvoteContent={<i className="upvote-icon far fa-heart"></i>}
              afterContent={this.props.data.voteCount}
              //shouldAllow={() => user.isLoggedIn}
              shouldAllow={() => true}
              onDisallowed={() => this.errorMessage('You have to log in!')}
              onUpvote={() => this.upvoteComment(this.props.data.id)}
              onRemoveVote={() => this.removeVote(this.props.data.id)}
            />
      </CommentWrapper>
    )
  }
}

const mapDispatchToProps = {
  upvoteComment
};

export default connect(null, mapDispatchToProps)(Comment);

const CommentWrapper = styled.div`
border: 1px solid #dbdbdb;
margin-bottom: 10px;
padding: 15px 15px;
  .author {
    font-size:20px;
  }
  .date {
    font-size:12px;
  }
  .text {
    margin-bottom:15px;
  }
`