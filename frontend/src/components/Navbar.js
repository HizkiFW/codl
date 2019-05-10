import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";

class Navbar extends Component {
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
            <img className="profile-pic" src={this.props.auth.urlAvatar} />
          ) : null}
        </div>
      </NavWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

export default connect(
  mapStateToProps,
  null
)(Navbar);

const NavWrapper = styled.nav`
  background: #24292e;
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
  outline: none;

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
