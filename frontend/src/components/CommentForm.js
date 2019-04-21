import React, { Component } from 'react'
import styled from 'styled-components';
import { createComment } from '../actions/commentActions';
import { connect } from 'react-redux';

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: '',
      text: '',
      dateCreation:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const comment = {
      postId: this.props.postId,
      text: this.state.text,
      dateCreation: Date.now(),
      voteCount:0,
      user: {
        id: 1
      },
    }

    this.props.createComment(comment);
  }

  render() {
    return (
      <CommentFormWrapper>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea className="form-control" rows="3" placeholder="Say what you want" spellCheck="false" onChange={this.onChange} name="text" value={this.state.text} required />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">SUBMIT</button>
        </form>
      </CommentFormWrapper>
    )
  }
}

const mapDispatchToProps = {
  createComment
};

export default connect(null, mapDispatchToProps)(CommentForm);

const CommentFormWrapper = styled.div`
margin-bottom: 20px;
`
