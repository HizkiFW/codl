import React, { Component } from 'react'
import styled from 'styled-components';

export default class CommentForm extends Component {

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <CommentFormWrapper onSubmit={this.onSubmit}>
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Say what you want"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">SUBMIT</button>
      </CommentFormWrapper>
    )
  }
}

const CommentFormWrapper = styled.div`
margin-bottom: 20px;
`
