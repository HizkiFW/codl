import React, { Component } from 'react'
import styled from 'styled-components';
import Code from './Code';

export default class Post extends Component {

  render() {
    return (
      <PostWrapper>
        <h1>Title</h1>
       <Code/>
       <span>This shit is really awesome because I made it myself</span>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        background:white;
        padding: 15px 15px;
`