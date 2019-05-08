import React, { Component } from 'react'

export default class Error extends Component {

  render() {
    return (
      <div className="card bg-danger text-white mt-3 text-center">
        <h5 className="card-header">ERROR 404</h5>
        <div className="card-body">
          <h5 className="card-title">Page not Found</h5>
          <p className="card-text">You have lost your way.</p>
          <a href="/" className="btn btn-secondary">Return to Home Page</a>
        </div>
      </div>
    )
  }
}
