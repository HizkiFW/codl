import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import AceEditor from "react-ace";
import "brace/theme/chaos";
import Upvote from "./Upvote";
import { connect } from "react-redux";
import {
  upvotePost,
  downvotePost,
  removeVotePost,
  deletePost
} from "../actions/postActions";
import { showModal } from "../actions/modalActions";
import { getLanguageTheme } from "../utils/language";
import { LANGUAGE_MAP } from "../utils/language";
import { withRouter } from "react-router-dom";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class Post extends Component {
  constructor() {
    super();
    this.theme = "";
  }
  componentWillMount() {
    this.theme = getLanguageTheme(this.props.data.language);
    require(`brace/mode/${this.props.data.language}`);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.data === undefined) {
      return false;
    } else {
      return true;
    }
  }

  upvotePost(id) {
    this.props.upvotePost({
      commentId: -1,
      postId: id,
      userId: this.props.auth.id,
      value: 1
    });
  }

  downvotePost(id) {
    this.props.downvotePost({
      commentId: -1,
      postId: id,
      userId: this.props.auth.id,
      value: -1
    });
  }

  removeVotePost(prevStatus, id) {
    this.props.removeVotePost(
      {
        commentId: -1,
        postId: id,
        userId: this.props.auth.id,
        value: 0
      },
      prevStatus
    );
  }

  getComments(number) {
    if (number === 0) {
      return " Comment";
    } else {
      return number + " Comments";
    }
  }

  getVoteStatus(id) {
    let votes = this.props.auth.votes;
    if (votes.find(vote => vote.postId === id)) {
      return votes.find(vote => vote.postId === id).value;
    }
  }

  onDelete(id) {
    this.props.deletePost(id).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    let author = this.props.data.user.name
      ? this.props.data.user.name
      : this.props.data.user.username;
    let date = timeAgo.format(
      new Date(this.props.data.dateCreation),
      "twitter"
    );
    let numberOfComments = this.getComments(this.props.data.numberOfComments);
    return (
      <PostWrapper>
        <div className="d-flex mb-3">
          <div className="mr-2">
            <img className="profile-pic" src={this.props.data.user.urlAvatar} />
          </div>
          <div>
            <div>
              <ThemeProvider theme={this.theme}>
                <LanguageWrapper>
                  #{LANGUAGE_MAP.get(this.props.data.language)}
                </LanguageWrapper>
              </ThemeProvider>
              <span className="title">{this.props.data.title}</span>
            </div>
            <span className="author">
              {author}・{date}
            </span>
          </div>
          <div className="ml-auto">
            <Upvote
              voteStatus={
                this.props.auth
                  ? this.getVoteStatus(this.props.data.id) || 0
                  : 0
              }
              upvoteContent={<i className="upvote-icon fa fa-arrow-up" />}
              afterContent={
                <span className="upvote-count">
                  {this.props.data.voteCount}
                </span>
              }
              downvoteContent={<i className="downvote-icon fa fa-arrow-down" />}
              shouldAllow={() => (this.props.auth ? true : false)}
              onDisallowed={() => this.props.showModal()}
              onUpvote={() => this.upvotePost(this.props.data.id)}
              onDownvote={() => this.downvotePost(this.props.data.id)}
              onRemoveVote={prevStatus =>
                this.removeVotePost(prevStatus, this.props.data.id)
              }
            />
          </div>
        </div>
        <div onClick={e => e.preventDefault()}>
          <AceEditor
            mode={this.props.data.language}
            theme="chaos"
            maxLines={Infinity}
            name="ace"
            width="100%"
            readOnly={true}
            value={this.props.data.code}
            highlightActiveLine={false}
            showPrintMargin={false}
            fontSize="15px"
            scrollMargin={[10, 10, 10, 10]}
            setOptions={{
              useWorker: false
            }}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </div>
        <span className="description">{this.props.data.description}</span>
        <div className="d-flex align-items-center">
          <div className="">
            {!this.props.isExpanded && (
              <div className="comment">
                <span>
                  <i className="fa fa-comment-alt" aria-hidden="true" />{" "}
                  {numberOfComments}
                </span>
              </div>
            )}
          </div>
          <div className="ml-auto">
            {this.props.auth &&
            this.props.auth.id === this.props.data.user.id &&
            this.props.isExpanded ? (
              <button
                className="delete-button"
                onClick={e => {
                  e.preventDefault();
                  this.onDelete(this.props.data.id);
                }}
              >
                DELETE
              </button>
            ) : null}
          </div>
        </div>
      </PostWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  upvotePost,
  downvotePost,
  removeVotePost,
  deletePost,
  showModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post));

const PostWrapper = styled.div`
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
  background: white;
  padding: 15px 15px;
  border: 1px solid #c9c9c9;

  &:hover {
    border: 1px solid #909090;
  }

  .profile-pic {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  .title {
    font-size: 27px;
    line-height: 32px;
  }

  .author {
    color: #666;
    font-size: 18px;
  }
  .description {
    line-height: 1.35em;
    white-space: pre-wrap;
  }
  #ace {
    margin-bottom: 10px;
  }
  .comment {
    color: rgb(135, 138, 140);
    margin-top: 5px;
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
    height: 28px;
    width: max-content;
    align-items: center;
    display: flex;
    border-radius: 2px;
    padding: 0 4px 0 4px;
    i {
      vertical-align: -1px;
    }
    &:hover {
      background-color: rgba(26, 26, 27, 0.1);
    }
  }
  .delete-button {
    border: none;
    background: transparent;
    color: #557de8;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const LanguageWrapper = styled.span`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  border-radius: 4px;
  font-size: 15px;
  padding: 2px 6px 3px;
  vertical-align: 4px;
  margin-right: 3px;
`;
