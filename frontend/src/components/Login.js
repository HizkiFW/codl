import React, { Component } from "react";
import GitHubLogin from "react-github-login";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";
import { closeModal } from "../actions/modalActions";
import rms from "../../public/img/rms.jpg";

class Login extends Component {
  onSuccess = response => {
    console.log(response);
    if (response !== undefined) {
      this.props.signIn(response);
    }
  };
  onFailure = response => {
    console.log(response);
  };
  onClick() {
    this.props.closeModal();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.showModal ? (
          <LoginWrapper
            onClick={() => {
              this.onClick();
            }}
          >
            <div
              className="join-body"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <p className="join-title">JOIN US</p>
              <div className="join-image">
                <img src={rms} className="img-fluid rounded" alt="join us" />
              </div>
              <GitHubLogin
                clientId="21dde3092c2673fd5e40"
                redirectUri="http://localhost:3000/"
                onSuccess={data => {
                  this.onSuccess(data);
                }}
                onFailure={error => {
                  this.onFailure(error);
                }}
                children={
                  <span className="icon-wrapper">
                    <span className="fab fa-github" />
                    <span>Sign in with Github</span>
                  </span>
                }
                className="btn btn-github"
              />
              <button
                className="close-modal"
                onClick={() => {
                  this.onClick();
                }}
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </LoginWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.showModal
});

const mapDispatchToProps = {
  signIn,
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const LoginWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1050;
  .join-body {
    padding: 20px;
    background: #dcffe6;
    border: 3px solid #c3ffd4;
    border-radius: 8px;
    max-width: 94%;
    display: inline-block;
    position: relative;
    margin: 0px auto;
    min-height: 300px;
    min-width: 300px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    .join-title {
      font-size: 1.2em;
      font-weight: 600;
      color: #af0a0f;
    }
    .join-image {
      margin-bottom: 30px;
    }
    .close-modal {
      position: absolute;
      right: 10px;
      top: 10px;
      background: transparent;
      border: none;
      color: #343a40;
      cursor: pointer;
      padding: initial;
      outline: none;
    }

    .btn-github {
      position: relative;
      padding-left: 48px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #fff;
      background-color: #444;
      border-color: rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #2b2b2b;
      }
      &:active {
        background-image: none;
      }

      .icon-wrapper {
        .fa-github {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 38px;
          line-height: 34px;
          font-size: 1.6em;
          text-align: center;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;
