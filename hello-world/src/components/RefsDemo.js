import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.callBackRef = null;
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.callBackRef) {
        this.callBackRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallBackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
