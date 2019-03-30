import React, { Component } from 'react'
import styled from 'styled-components';
import Code from './Code';

export default class Post extends Component {

  render() {
    return (
      <PostWrapper>
        <h4>{this.props.data.language} No.{this.props.data.id} / {this.props.data.title}</h4>
        <Code code={this.props.data.code} language={this.props.data.language}/>
        <span>{this.props.data.description}</span>
        <p>{this.props.data.user.username}, {this.props.data.dateCreation}</p>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        margin-bottom: 10px;
        background:white;
        padding: 15px 15px;
`