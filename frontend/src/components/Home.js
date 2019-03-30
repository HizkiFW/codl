import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PostList from './Posts';

class Home extends Component {
  render() {
    return (
      <PostList />
    );
  }
}

export default Home;
