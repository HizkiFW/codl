import React, { Component } from "react";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import Heart from "./Heart";
import en from "javascript-time-ago/locale/en";
import { connect } from "react-redux";
import { showModal } from "../actions/modalActions";
import {
  upvoteComment,
  removeVoteComment,
  deleteComment
} from "../actions/commentActions";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class Comment extends Component {
  upvoteComment(comment) {
    this.props.upvoteComment({
      commentId: comment.id,
      postId: comment.postId,
      userId: this.props.auth.id,
      value: 1
    });
  }

  removeVote(comment) {
    this.props.removeVoteComment({
      commentId: comment.id,
      postId: comment.postId,
      userId: this.props.auth.id,
      value: 0
    });
  }

  getVoteStatus(id) {
    let votes = this.props.auth.votes;
    if (votes.find(vote => vote.commentId === id)) {
      return votes.find(vote => vote.commentId === id).value;
    }
  }

  onDelete(id) {
    this.props.deleteComment(id);
  }

  render() {
    let author = this.props.data.user.name
      ? this.props.data.user.name
      : this.props.data.user.username;
    let date = timeAgo.format(
      new Date(this.props.data.dateCreation),
      "twitter"
    );

    if (date === "") {
      date = "seconds ago";
    }
    return (
      <CommentWrapper>
        <div className="d-flex mb-3 align-items-center">
          <div className=" mr-1">
            <img className="profile-pic" src={this.props.data.user.urlAvatar} />
          </div>
          <div className="">
            <span className="author">{author}</span>
          </div>
          <div className="ml-auto">
            <span className="date">{date}</span>
          </div>
        </div>
        <div className="text">{this.props.data.text}</div>

        <div className="d-flex">
          <div className="">
            <Heart
              voteStatus={
                this.props.auth
                  ? this.getVoteStatus(this.props.data.id) || 0
                  : 0
              }
              upvoteContent={
                <i
                  id="like-button"
                  className="upvote-icon far fa-heart not-liked"
                />
              }
              afterContent={this.props.data.voteCount}
              shouldAllow={() => (this.props.auth ? true : false)}
              onDisallowed={() => this.props.showModal()}
              onUpvote={() => this.upvoteComment(this.props.data)}
              onRemoveVote={() => this.removeVote(this.props.data)}
            />
          </div>
          <div className="ml-auto">
            {this.props.auth &&
            this.props.auth.id === this.props.data.user.id ? (
              <button
                className="delete-button"
                onClick={() => {
                  this.onDelete(this.props.data.id);
                }}
              >
                DELETE
              </button>
            ) : null}
          </div>
        </div>
      </CommentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  upvoteComment,
  removeVoteComment,
  deleteComment,
  showModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);

const CommentWrapper = styled.div`
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
  padding: 15px 15px;
  line-height: 1.35em;

  .profile-pic {
    height: 33px;
    width: 33px;
    border-radius: 50px;
  }
  .author {
    font-size: 20px;
  }
  .date {
    font-size: 12px;
    color: #666;
  }
  .text {
    margin-bottom: 15px;
    white-space: pre-wrap;
  }
  .delete-button {
    font-size: 0.8em;
    border: none;
    background: transparent;
    color: #557de8;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  }
`;
