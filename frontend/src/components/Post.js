import React, { Component } from 'react'
import styled from 'styled-components';
import Code from './Code';

export default class Post extends Component {

  render() {
    return (
      <PostWrapper>
        <h1>{this.props.data.title}</h1>
        <Code />
        <span>{this.props.data.description}</span>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        margin-bottom: 15px;
        background:white;
        padding: 15px 15px;
`