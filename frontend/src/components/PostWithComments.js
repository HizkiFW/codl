import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class PostWithComments extends Component {
    render() {
        const url = this.props.location.pathname;
        const id = Number(url.substr(url.lastIndexOf('/') + 1));
        let post = this.props.posts.find(x => x.id === id);
        return (
            <Post data={post} />
        )
    }

}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, null)(PostWithComments);;


