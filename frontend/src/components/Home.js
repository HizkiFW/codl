import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PostList from './Posts';
import { Provider } from 'react-redux';
import store from '../store'

class Home extends Component {
  render() {
    return (
      <Provider store={store}>
          <PostList />
      </Provider>
    );
  }
}

export default Home;
