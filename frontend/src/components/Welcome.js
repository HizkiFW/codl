import React, { Component } from 'react'
import { CardContainer } from './Card'

export default class Welcome extends Component {
  render() {
    return (
    <CardContainer className="card">
        <div className="card-header blue">
            Welcome <i className="fa fa-heart"></i>
        </div>
        <div className="card-body rounded">
        <p className="card-text">Share and discuss the best/coolest piece of code you have ever seen!</p>
        </div>
    </CardContainer>
    )
  }
}
