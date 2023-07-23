import React, { Component } from "react";

class Msg extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank You!",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Button</button>
      </div>
    );
  }
}

export default Msg;
