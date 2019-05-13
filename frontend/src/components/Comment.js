import React, { Component } from "react";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import Heart from "./Heart";
import en from "javascript-time-ago/locale/en";
import { connect } from "react-redux";
import { showModal } from "../actions/modalActions";
import { upvoteComment } from "../actions/commentActions";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class Comment extends Component {
  upvoteComment(id) {
    this.props.upvoteComment({
      commentId: id,
      userId: this.props.auth.id
    });
    document.getElementById("like-button").classList.toggle("fas");
    document.getElementById("like-button").classList.toggle("far");
  }

  removeVote(id) {
    this.props.downvoteComment({
      commentId: id,
      userId: this.props.auth.id
    });
    document.getElementById("like-button").classList.toggle("fas");
    document.getElementById("like-button").classList.toggle("far");
  }

  getVoteStatus(id) {
    let votes = this.props.auth.votes;
    if (votes && votes.find(vote => vote.commentId === id)) {
      return votes.find(vote => vote.commentId === id).value;
    }
  }

  render() {
    let date = timeAgo.format(
      new Date(this.props.data.dateCreation),
      "twitter"
    );

    if (date === "") {
      date = "seconds ago";
    }
    return (
      <CommentWrapper>
        <div className="d-flex bd-highlight mb-3">
          <div className="bd-highlight mr-1">
            <img className="profile-pic" src={this.props.data.user.urlAvatar} />
          </div>
          <div className="bd-highlight">
            <span className="author">{this.props.data.user.name}</span>
          </div>
          <div className="ml-auto bd-highlight">
            <span className="date">{date}</span>
          </div>
        </div>
        <div className="text">{this.props.data.text}</div>
        <Heart
          voteStatus={
            this.props.auth ? this.getVoteStatus(this.props.data.id) || 0 : 0
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
          onUpvote={() => this.upvoteComment(this.props.data.id)}
          onRemoveVote={() => this.removeVote(this.props.data.id)}
        />
      </CommentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  upvoteComment,
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
  }
  .text {
    margin-bottom: 15px;
  }
`;
