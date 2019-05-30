import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";
import { showModal } from "../actions/modalActions";

class Navbar extends Component {
  onSignOutClick() {
    this.props.signOut();
  }

  onShareCodeClick() {
    if (this.props.auth) {
      this.props.history.push("/submit");
    } else {
      this.props.showModal();
    }
  }

  render() {
    return (
      <NavWrapper className="navbar sticky-top navbar-expand-lg navbar-dark justify-content-between">
        <NavLink to="/" className="navbar-brand">
          codl
        </NavLink>
        <form className="form-inline col-6">
          <input
            className="form-control form-control-sm bg-dark text-white border-0 col-12"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div>
          <div className="d-none d-md-inline-block mr-3">
            <ButtonContainer
              onClick={() => {
                this.onShareCodeClick();
              }}
            >
              SHARE CODE
            </ButtonContainer>
          </div>
          {this.props.auth ? (
            <div className="dropdown show d-inline-block">
              <button data-toggle="dropdown" className="profile-button">
                <img className="profile-pic" src={this.props.auth.urlAvatar} />
              </button>

              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    this.onSignOutClick();
                  }}
                >
                  Sign Out
                </button>
                <NavLink to="/submit" className="dropdown-item">
                  Share Code
                </NavLink>
              </div>
            </div>
          ) : null}
        </div>
      </NavWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

const mapDispatchToProps = {
  signOut,
  showModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));

const NavWrapper = styled.nav`
  background: #24292e;
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
  outline: none;

  .profile-button {
    background: transparent;
    border: 0;
    outline: none;
  }

  .profile-pic {
    height: 35px;
    width: 35px;
    border-radius: 100%;
  }

  a,
  a:active,
  a:focus {
    outline: none;
  }
`;
