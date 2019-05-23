import React, { Component } from "react";
import styled from "styled-components";
import { createComment } from "../actions/commentActions";
import { showModal } from "../actions/modalActions";
import { connect } from "react-redux";
import $ from "jquery"

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: "",
      text: "",
      dateCreation: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    if (!this.props.auth) {
      $("#comment").prop('disabled', true);
      this.props.showModal();
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const comment = {
      postId: this.props.postId,
      text: this.state.text,
      dateCreation: Date.now(),
      voteCount: 1,
      user: this.props.auth
    };

    this.props.createComment(comment);

    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <CommentFormWrapper>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              rows="3"
              placeholder="What are your thoughts?"
              spellCheck="false"
              onClick={this.onClick}
              onChange={this.onChange}
              name="text"
              id="comment"
              value={this.state.text}
              required
            />
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary btn-sm">
              SUBMIT
            </button>
          </div>
        </form>
      </CommentFormWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  createComment,
  showModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

const CommentFormWrapper = styled.div`
  margin-bottom: 20px;
  background-color: #f4f8ff;
  padding: 15px 15px;
  border: 2px solid #4286f4;

  textarea:invalid {
    box-shadow: none;
  }
`;
