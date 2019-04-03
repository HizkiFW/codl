import React, { Component } from 'react'

class Comments extends Component {

  render() {
    const commentItems = this.props.data.map(comment => (
      <div key={comment.id}>
        {comment.text}
      </div>
    ));
    return (
      <div>
        {commentItems}
      </div>
    )
  }
}

export default Comments;