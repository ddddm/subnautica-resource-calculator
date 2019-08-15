import React, { Component } from "react";

export default class ErrorHandler extends Component {
  state = {
    didCrash: false
  };
  componentDidCatch(error, info) {
    this.setState({
      didCrash: true
    });

    console.error(error);
    console.log("App crashed with the following info");
    console.log(info);
  }
  render() {
    if (this.state.didCrash) return <h1>App crashed :(</h1>;

    return this.props.children;
  }
}
