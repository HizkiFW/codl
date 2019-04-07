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
    };


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            code: this.state.code,
            description: this.state.description,
            language: this.state.language,
            user: {
                id: 1
            },
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <PostFormWrapper>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input className="form-control" id="exampleInputEmail1" spellCheck="false" onChange={this.onChange} name="title" value={this.state.title} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Language select</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChange} name="language" value={this.state.language} required>
                            <option></option>
                            <option>HTML</option>
                            <option>java</option>
                            <option>RUST</option>
                            <option>GO</option>
                            <option>JAVASCRIPT</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea3">Code</label>
                        <textarea className="form-control" id="exampleFormControlTextarea3" spellCheck="false" rows="7" onChange={this.onChange} name="code" value={this.state.code} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea3">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea3" spellCheck="false" rows="2" onChange={this.onChange} name="description" value={this.state.description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </PostFormWrapper>
        )
    }
}

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm);

const PostFormWrapper = styled.div`
border-radius: 3px;
margin-bottom: 15px;
margin-top:5px;
margin-right:5px;
background:white;
padding: 15px 15px;
`