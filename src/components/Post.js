import React, { Component } from 'react'
import Prism from "prismjs"
import styled from 'styled-components';
import "prismjs/themes/prism-coy.css";

export default class Post extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <PostWrapper>
        <pre className="language-javascript line-numbers">
          <code className="language-javascript">
            {`
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
    };
}
  `}
          </code>
        </pre>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        background:white;
`