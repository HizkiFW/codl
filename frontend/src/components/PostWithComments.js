import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comments from './Comments'

class PostWithComments extends Component {

    render() {
        return (
            <React.Fragment>
                <Post data={this.props.post} />
                <Comments data={this.props.post.comments} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.items.find(x => x.id === props.location.state.postId)
});

export default connect(mapStateToProps, null)(PostWithComments);;


