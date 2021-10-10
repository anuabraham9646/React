import React, { Component } from "react";

export class GreetClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Visitor",
    };
  }

  handleClick() {
    this.setState({
      name: "Joe",
    });
  }
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} from state i have {this.props.count} props
        </h1>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }
}

export default GreetClass;
