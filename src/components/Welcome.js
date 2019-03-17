import React, { Component } from 'react'
import { CardContainer } from './Card'

export default class Welcome extends Component {
  render() {
    return (
    <CardContainer className="card">
        <div class="card-header">
            Welcome
        </div>
        <div class="card-body">
        <p class="card-text">Share and discuss about the best/coolest piece of code you have ever seen!</p>
        </div>
    </CardContainer>
    )
  }
}
