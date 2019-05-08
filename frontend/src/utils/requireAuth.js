import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal } from "../actions/modalActions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
        this.props.showModal();
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth.authenticated
  });

  const mapDispatchToProps = {
    showModal
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};
