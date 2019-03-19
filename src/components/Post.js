import React, { Component } from 'react'
import styled from 'styled-components';
import { Pre, LineNo } from './styles'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDarkPlus'

const exampleCode = `
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();
  
  return () => <App />;
  `;
export default class Post extends Component {

  render() {
    return (
      <PostWrapper>
        <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
        background:white;
`