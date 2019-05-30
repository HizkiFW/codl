import React, { Component } from "react";
import styled from "styled-components";
import { createPost } from "../actions/postActions";
import { connect } from "react-redux";
import Select from "react-select";
import AceEditor from "react-ace";
import "brace/theme/terminal";
import { LANGUAGE_MAP } from "../utils/language";

for (let [k] of LANGUAGE_MAP) {
  require(`brace/mode/${k}`);
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      language: "javascript",
      code: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCodeChange(newValue) {
    this.setState({
      code: newValue
    });
  }

  onLanguageChange(newValue) {
    this.setState({
      language: newValue.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      code: this.state.code,
      description: this.state.description,
      language: this.state.language,
      dateCreation: Date.now(),
      user: this.props.auth
    };

    this.props.createPost(post).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <PostFormWrapper>
        <div className="alert alert-danger collapse" role="alert" id="error" />
        <form onSubmit={this.onSubmit}>
          <div className="d-flex">
            <div className="p-1 flex-grow-1 col-8">
              <label>Title</label>
              <input
                className="form-control"
                spellCheck="false"
                onChange={this.onChange}
                name="title"
                value={this.state.title}
                required
              />
            </div>
            <div className="p-1 col-4">
              <label>Language</label>
              <Select
                value={{
                  value: this.state.language,
                  label: LANGUAGE_MAP.get(this.state.language)
                }}
                onChange={this.onLanguageChange}
                options={Array.from(LANGUAGE_MAP, ([key, value]) => ({
                  value: key,
                  label: value
                }))}
                className="select"
              />
            </div>
          </div>
          <div className="code">
            <label>Code</label>
            <AceEditor
              mode={this.state.language}
              theme="terminal"
              onChange={this.onCodeChange}
              name="ace"
              value={this.state.code}
              height="400px"
              width="100%"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                useWorker: false
              }}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              spellCheck="false"
              rows="2"
              onChange={this.onChange}
              name="description"
              value={this.state.description}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </PostFormWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  createPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

const PostFormWrapper = styled.div`
  border-radius: 4px;
  margin-bottom: 15px;
  margin-top: 13px;
  background: white;
  padding: 15px 15px;
  border: 1px solid #c9c9c9;

  .code {
    margin: 20px 5px;
  }

  .select {
    z-index: 5;
  }

  textarea:invalid {
    box-shadow: none;
  }
`;
