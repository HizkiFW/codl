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
import Login from "./components/Login";
import PostsWithFIlter from './components/PostsWithFilter'
import PostWithComments from './components/PostWithComments';
import Error from './components/Error';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';
import styled from 'styled-components';
import Portal from './utils/Portal'
import { AUTH_USER } from "./actions/types"

const user = localStorage.getItem('token');

if (user) {
  store.dispatch({ type: AUTH_USER, payload: user });
}

class App extends Component {
  state = { showModal: true }
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    let showModal = store.getState().modal.showModal;

    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar />
              <ContentWrapper className="d-flex">
                <div className="p-2 mt-2 d-none d-md-block">
                  <Welcome />
                  <Tags />
                  <SocialMedia />
                </div>
                <div className="p-2 flex-grow-1">
                  <Switch>
                    <Route path="/" component={Posts} exact />
                    <Route path="/submit" component={PostForm} />
                    <Route path="/post/:postId" component={PostWithComments} />
                    <Route path="/t/:lang/:chrono" component={PostsWithFIlter} />
                    <Route component={Error} />
                  </Switch>
                </div>
                <div className="p-1 d-none d-md-block">
                </div>
              </ContentWrapper >
              {showModal ? (
                <Portal>
                  <Login onClose={this.handleCloseModal} />
                </Portal>
              ) : null}
            </React.Fragment>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

const ContentWrapper = styled.div`
max-width: 1250px;
margin: auto;
`