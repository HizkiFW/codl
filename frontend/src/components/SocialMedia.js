import React, { Component } from 'react'
import { CardContainer } from './Card'

export default class SocialMedia extends Component {
  render() {
    return (
      <CardContainer className="card">
        <div className="card-header">
          Links
        </div>
        <div className="card-body text-center">
          <a href="/" role="button"><i className="fab fa-github fa-3x mr-3 text-dark"></i></a>
          <a href="/" role="button"><i className="fab fa-twitter fa-3x mr-3 text-dark"></i></a>
        </div>
      </CardContainer>
    )
  }
}
