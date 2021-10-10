import React, { Component } from "react";
import RefDemo from "./RefDemo";
import FwdRef from "./FwdRef";

export class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.compref = React.createRef();
    this.fwdRef = React.createRef();
  }

  clickHandle = () => {
    this.compref.current.focusFromParent();
  };

  clickHandleFwdRef = () => {
    this.fwdRef.current.focus();
    alert(this.fwdRef.current.value);
  };

  render() {
    return (
      <div>
        <RefDemo ref={this.compref} />

        <button onClick={this.clickHandle}>Focus From Parent</button>
        <FwdRef ref={this.fwdRef} />
        <button onClick={this.clickHandleFwdRef}>Focus From FwdRef</button>
      </div>
    );
  }
}

export default ParentRef;
