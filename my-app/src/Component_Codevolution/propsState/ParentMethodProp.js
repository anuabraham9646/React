import React, { Component } from "react";
import ChildMethodToProp from "./ChildMethodToProp";

export class ParentMethodProp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    this.setState({
      message: `Hello i am Parent being called from ${childName}`,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildMethodToProp click={this.greetParent} />
      </div>
    );
  }
}

export default ParentMethodProp;
