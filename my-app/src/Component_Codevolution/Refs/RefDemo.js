import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  click = () => {
    alert(this.inputRef.current.value);
  };

  focusFromParent = () => {
    this.inputRef.current.focus();
  };
  /*
  We can use didComponentMount to focus without clicking button
  */

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.click}>click for alert</button>
      </div>
    );
  }
}

export default RefDemo;
