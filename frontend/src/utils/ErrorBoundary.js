import React from "react";
import styled from "styled-components";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <h3>Oops!</h3>
          <p> Things are a little unstable here </p>
          <p> I suggest you come back later</p>
        </ErrorWrapper>
      );
    }
    return this.props.children;
  }
}

const ErrorWrapper = styled.div`
  font-family: Inconsolata, monospace;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 320px;
  height: 200px;
  border: 1px solid #000;
  padding: 20px;
  background: white;
  font-size: 16px;
  font-weight: 200;

  h3 {
    font-size: 40px;
    font-weight: 700;
    animation: blink 1.3s infinite;
    text-align: center;
  }
`;
