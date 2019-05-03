import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';
import ChronoFilter from "./ChronoFilter"
import InfiniteScroll from "react-infinite-scroll-component"

class FilteredPosts extends Component {

    state = {
        start: 0
    };

    componentWillMount() {
        this.props.fetchPosts({ start: this.state.start, language: this.props.match.params.lang, chrono: this.props.match.params.chrono });
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.lang !== this.props.match.params.lang || nextProps.match.params.chrono !== this.props.match.params.chrono) {
            this.props.fetchPosts({ language: nextProps.match.params.lang, chrono: nextProps.match.params.chrono });
        }
    }

    fetchMoreData = () => {
        this.setState({
            start: this.props.posts.length
        });
        this.props.fetchMorePosts({ start: this.state.start, language: this.props.match.params.lang, chrono: this.props.match.params.chrono })
    };

    render() {
        let sortByNew = (this.props.match.params.chrono === "new" || typeof this.props.match.params.chrono === 'undefined') ? true : false;
        const postItems = this.props.posts.map(post => (
            <PostsWrapper key={post.id}>
                <Link to={`/post/${post.id}`}>
                    <Post data={post} isHidden={false} />
                </Link>
            </PostsWrapper>
        ));
        return (
            <div>
                <ChronoFilter lang={this.props.match.params.lang} sortByNew={sortByNew} />
                <InfiniteScroll
                    dataLength={this.props.posts.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4 className="text-center">Loading...</h4>}
                >
                    {postItems}
                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

const mapDispatchToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredPosts);

const PostsWrapper = styled.div`
  a {
    text-decoration: none;
    color:inherit;
  }
`