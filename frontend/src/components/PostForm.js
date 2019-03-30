import React, { Component } from 'react'
import styled from 'styled-components';
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            language: '',
            code: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            id: '',
            title: this.state.title,
            code: this.state.code,
            description: this.state.description,
            language: this.state.language,
            voteCount: '',
            user: {
                id: '',
                username: '',
                dateCreation: '',
            },
            dateCreation: ''
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <PostFormWrapper>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="title" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Language select</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChange} name="langauge" value={this.state.language}>
                            <option>HTML</option>
                            <option>JAVA</option>
                            <option>RUST</option>
                            <option>GO</option>
                            <option>JAVASCRIPT</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea3">Code</label>
                        <textarea className="form-control" id="exampleFormControlTextarea3" rows="7" onChange={this.onChange} name="code" value={this.state.code} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea3">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea3" rows="2" onChange={this.onChange} name="description" value={this.state.description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </PostFormWrapper>
        )
    }
}

export default connect(null, { createPost })(PostForm);

const PostFormWrapper = styled.div`
                        margin-bottom: 15px;
                        background:white;
                        padding: 15px 15px;
`