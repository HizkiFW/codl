import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

class Navbar extends Component {
  onClick() {
    this.props.signOut();
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
          <NavLink to="/submit" className="d-none d-md-inline-block mr-3">
            <ButtonContainer>SHARE CODE</ButtonContainer>
          </NavLink>
          {this.props.auth ? (
            <div className="dropdown show d-inline-block">
              <button data-toggle="dropdown" className="profile-button">
                <img className="profile-pic" src={this.props.auth.urlAvatar} />
              </button>

              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    this.onClick();
                  }}
                >
                  Sign Out
                </button>
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
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

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
