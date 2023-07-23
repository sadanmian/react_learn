import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Welcome {name} {heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
