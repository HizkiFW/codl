import React, { Component } from "react";
import { CardContainer } from "./Card";

export default class SocialMedia extends Component {
  render() {
    return (
      <CardContainer className="card">
        <div className="card-header purple">Links</div>
        <div className="card-body rounded text-center">
          <a href="/" role="button">
            <i className="fab fa-github fa-2x mr-3 text-dark" />
          </a>
          <a href="/" role="button">
            <i className="fab fa-twitter fa-2x mr-3 text-dark" />
          </a>
        </div>
      </CardContainer>
    );
  }
}
