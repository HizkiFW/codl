import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/terminal';
import Upvote from './Upvote';
import { connect } from 'react-redux';
import { upvotePost, downvotePost } from '../actions/postActions';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US');


class Post extends Component {
  constructor() {
    super();
    this.theme = '';
  }
  componentWillMount() {
    this.theme = (() => {
      switch (this.props.data.language) {
        case 'HTML':
          return { fg: "white", bg: "brown" };
        case 'RUST':
          return { fg: "yellow", bg: "black" };
        default:
          return { fg: "#b2ffe1", bg: "#091b47" };
      }
    }
    )();
  }

  upvotePost(id) {
    this.props.upvotePost(id);
  }

  downvotePost(id) {
    this.props.downvotePost(id);
  }

  removeVote(id) {
    console.log('removevote');
  }

  getComments(number) {

    if (number === 0) {
      return " Comment"
    } else {
      return number + " Comments"
    }
  }

  render() {
    let date = timeAgo.format(new Date(this.props.data.dateCreation), 'twitter');
    let numberOfComments = this.getComments(this.props.data.comments.length);
    return (
      <PostWrapper>
        <div className="d-flex bd-highlight mb-3">
          <div className="bd-highlight">
            <h4><ThemeProvider theme={this.theme}><LanguageWrapper>#{this.props.data.language}</LanguageWrapper></ThemeProvider> {this.props.data.title}</h4>
            <span className="author">{this.props.data.user.username}・{date}</span>
          </div>
          <div className="ml-auto bd-highlight">
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
          </div>
        </div>
        <AceEditor
          mode={this.props.data.language}
          theme="terminal"
          maxLines={Infinity}
          width="100%"
          readOnly={true}
          value={this.props.data.code}
          fontSize="15px"
          setOptions={{
            useWorker: false
          }}
        />
        <span>{this.props.data.description}</span>
        {!this.props.isHidden && <div className="comment"><span><i className="fa fa-comment" aria-hidden="true"></i> {numberOfComments}</span></div>}
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
border-radius: 3px;
margin-top:5px;
margin-right:5px;
margin-bottom: 10px;
background:white;
padding: 15px 15px;
  .author {
    color:#666;
    font-size:17px;
  }
  .comment {
    color: rgb(135, 138, 140);
    margin-top:5px;
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
        vertical-align: 1px;
      }
      &:hover {
        background-color: rgba(26, 26, 27, 0.1);
      }
  }
`

const LanguageWrapper = styled.span`
color: ${props => props.theme.fg};
background: ${props => props.theme.bg};
border-radius: 4px;
font-size: 15px;
padding: 2px 6px 3px;
vertical-align: 4px;
`