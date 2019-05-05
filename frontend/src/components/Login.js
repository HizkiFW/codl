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
            <LoginWrapper onClick={this.props.onClose}>
                <div className="join-body">
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
                </div>
            </LoginWrapper>
        )
    }
}


const mapDispatchToProps = {
    signIn
};

export default connect(null, mapDispatchToProps)(Login);

const LoginWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: grid;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.3);
z-index: 6;

.join-body {
    padding: 20px;
    background: #dcffe6;
    border: 3px solid #c3ffd4;
    border-radius: 8px;
    max-width: 94%;
    margin: 0px auto;
    min-height: 300px;
    min-width: 300px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    text-align: center;
        .join-title {
            font-size: 1.1em;
            font-weight: bold;
        }

        .join-image {
            margin-bottom:30px;
        }
}
`
