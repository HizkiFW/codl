import React, { Component } from 'react'
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

export default class Login extends Component {
    render() {
        return (
            <GitHubLogin clientId="ac56fad434a3a3c1561e"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        )
    }
}
