import React, { PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
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
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
