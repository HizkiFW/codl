import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" Component={PostList}/>
          <Route Component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
