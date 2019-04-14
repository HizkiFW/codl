import React, { Component } from 'react'
import { CardContainer } from './Card'
import { fetchTags } from '../actions/tagActions';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class Tags extends Component {

    componentWillMount() {
        this.props.fetchTags();
    }

    render() {
        const tagItems = this.props.tags.map((tag, i) => (
            <li className="list-group-item" key={i} onClick={(e) => {
                console.log(tag)
                e.preventDefault();
                this.props.fetchPosts(tag[0])
            }}>#{tag[0]} ({tag[1]})</li>
        ));

        return (
            <CardContainer className="card">
                <div className="card-header">
                    Tags
                </div>
                <ul className="list-group list-group-flush">
                    {tagItems}
                </ul>
            </CardContainer>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.tags.items
});

const mapDispatchToProps = {
    fetchTags,
    fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

