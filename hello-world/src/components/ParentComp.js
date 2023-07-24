import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sadan",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sadan",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component Render");
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name}></RegularComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
