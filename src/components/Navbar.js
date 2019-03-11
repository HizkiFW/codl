import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3">
                <Link to='/' className="navbar-brand">
                    codl
                </Link>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control bg-dark mr-sm-2 border-0" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">About</li>
                    <li className="nav-item">About</li>
                </ul>
                <Link to='/' className="ml-auto">
                    <ButtonContainer>
                        Sign in
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
        background:#24292e;
        color:white;
        font-size:1rem;
        text-transform:capitalize;
`