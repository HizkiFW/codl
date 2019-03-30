import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Tags from './components/Tags';
import Welcome from './components/Welcome';
import SocialMedia from './components/SocialMedia';
import Submit from './components/Submit';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="d-flex">
            <div className="p-1">
              <Welcome />
              <Tags />
              <SocialMedia />
            </div>
            <div className="p-1 flex-grow-1">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/submit" component={Submit} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
