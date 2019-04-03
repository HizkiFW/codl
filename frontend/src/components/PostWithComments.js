import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comments from './Comments'

class PostWithComments extends Component {

    render() {
        return (
            <React.Fragment>
                <Post data={this.props.post} />
                <Comments data={this.props.post.comments}/>
            </React.Fragment>
        )
    }

}

/*const mapStateToProps = state => ({
    post: state.posts.item
});*/

function mapStateToProps(state) {
    console.log('hello');
    return { post: state.posts.item }
  }

export default connect(mapStateToProps, null)(PostWithComments);;


