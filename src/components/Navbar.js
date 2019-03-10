import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' className="navbar-brand">
                    codl
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">About</li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <Link to='/' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i class="fa fa-sign-in" aria-hidden="true" />
                        </span>
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
        font-size:1.3rem;
        text-transform:capitalize;
`