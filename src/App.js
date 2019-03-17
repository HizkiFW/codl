import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Tags from './components/Tags';
import PostList from './components/PostList';
import Default from './components/Default';
import Welcome from './components/Welcome';
import Links from './components/Links';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Welcome/>
        <Tags/>
        <Links/>
        <Switch>
          <Route exact path="/" Component={PostList}/>
          <Route Component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
