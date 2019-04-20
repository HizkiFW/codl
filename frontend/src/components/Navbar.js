import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar sticky-top navbar-expand-lg navbar-dark justify-content-between">
                <NavLink to="/" className="navbar-brand">
                    codl
                </NavLink>
                <form className="form-inline col-6">
                    <input className="form-control bg-dark mr-sm-2 border-0 col-12" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <NavLink to='/submit' className="">
                    <ButtonContainer>
                        Share code
                    </ButtonContainer>
                </NavLink>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
        background:#24292e;
        color:white;
        font-size:1rem;
        text-transform:capitalize;
        outline:none;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
        a, a:active, a:focus {
            outline: none;
        }
`