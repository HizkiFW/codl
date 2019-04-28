import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import "popper.js"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Tags from './components/Tags';
import Welcome from './components/Welcome';
import SocialMedia from './components/SocialMedia';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FilteredPosts from './components/FilteredPosts'
import PostWithComments from './components/PostWithComments';
import Error from './components/Error';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
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
                    <Route path="/" component={Posts} exact />
                    <Route path="/submit" component={PostForm} />
                    <Route path="/post/:postId" component={PostWithComments} />
                    <Route path="/t/:lang/:chrono" component={FilteredPosts} />
                    <Route component={Error} />
                  </Switch>
                </div>
              </div>
            </React.Fragment>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
