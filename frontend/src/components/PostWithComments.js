import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comments from './Comments'
import { fetchComments } from '../actions/commentActions';

class PostWithComments extends Component {

    componentWillMount() {
        this.props.fetchComments(this.props.location.state.postId);
    }

    render() {
        return (
            <React.Fragment>
                <Post data={this.props.post} isHidden={true} />
                <Comments postId={this.props.location.state.postId} data={this.props.comments}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.items.find(x => x.id === props.location.state.postId),
    comments: state.comments.items
});

const mapDispatchToProps = {
    fetchComments
};

export default connect(mapStateToProps, mapDispatchToProps)(PostWithComments);;


