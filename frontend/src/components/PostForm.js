import React, { Component } from 'react'
import styled from 'styled-components';
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';
import Select from 'react-select';
import AceEditor from 'react-ace';
import 'brace/theme/terminal';

const options = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
];

options.forEach(lang => {
    require(`brace/mode/${lang}`);
    require(`brace/snippets/${lang}`);
});

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            language: 'javascript',
            code: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCodeChange(newValue) {
        this.setState({
            code: newValue
        });
    }

    onLanguageChange(newValue) {
        this.setState({
            language: newValue.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            code: this.state.code,
            description: this.state.description,
            language: this.state.language,
            voteCount: 1,
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
                    <div className="d-flex">
                        <div className="p-1 flex-grow-1 col-8">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input className="form-control" id="exampleInputEmail1" spellCheck="false" onChange={this.onChange} name="title" value={this.state.title} required />
                        </div>
                        <div className="p-1 col-4">
                            <label>Language</label>
                            <Select
                                value={{ value: this.state.language, label: this.state.language }}
                                onChange={this.onLanguageChange}
                                options={options.map(
                                    lang => ({ value: lang, label: lang })
                                )}
                                className="select"
                            />
                        </div>
                    </div>
                    <div className="code">
                        <label>Code</label>
                        <AceEditor
                            mode={this.state.language}
                            theme="terminal"
                            onChange={this.onCodeChange}
                            name="ace"
                            value={this.state.code}
                            height="400px"
                            width="100%"
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{
                                useWorker: false
                            }}
                        />
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

.code {
    margin:20px 5px;
}

.select {   
    z-index:5;
}
`