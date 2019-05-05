import React, { Component } from 'react'
import GitHubLogin from 'react-github-login';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

const onSuccess = response => {
    this.props.signIn(response);
}
const onFailure = response => console.error(response);

class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <p className="join-title">JOIN US</p>
                <div className="join-image">
                    <img src="./join-us.gif" className="img-fluid rounded" alt="join us"></img>
                </div>
                <GitHubLogin clientId="21dde3092c2673fd5e40"
                    redirectUri="http://localhost:3000/" 
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    children={<span><i className="fab fa-github"></i> Sign In with Github</span>}
                    className="btn btn-dark"
                />
            </LoginWrapper>
        )
    }
}


const mapDispatchToProps = {
    signIn
};

export default connect(null, mapDispatchToProps)(Login);

const LoginWrapper = styled.div`
margin: 15px auto;
max-width: 94%;
text-align:center;
background: #dcffe6;
border-radius: 8px;
padding: 15px 10px;
border: 3px solid #c3ffd4;

.join-title {
    font-size: 1.1em;
    font-weight: bold;
}

.join-image {
    margin-bottom:30px;
    opacity: 0.9;
}
`
