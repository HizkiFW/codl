import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardContainer } from './Card'
import { fetchTags } from '../actions/tagActions';
import { connect } from 'react-redux';

class Tags extends Component {

    componentWillMount() {
        this.props.fetchTags();
    }

    render() {
        const tagItems = this.props.tags.map((tag, i) => (
            <Link key={i} to={{
                pathname: '/t/' + tag.language,
                state: {
                    tag: tag.language
                }
            }}>
                <li className="list-group-item">#{tag.language} ({tag.count})</li>
            </Link>
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
    fetchTags
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

