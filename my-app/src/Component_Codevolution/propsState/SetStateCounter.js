import React, { Component } from "react";

export class SetStateCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  handleClick1Param() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this.state.counter);
  }

  handleClick2Param() {
    /*
      This is buggy cos this is asynchronous and updating the cuurent state is buggy 
      cos if method called 5 times all are called at once synchronously hence we need 3rd approach
      using the prev state
      */
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log("CallBack value", this.state.counter)
    );
    console.log(this.state.counter);
  }

  handleClickPrevState() {
    this.setState(
      (prev, props) => ({
        counter: prev.counter + props.count,
      }),
      () => console.log(`callback value is ${this.state.counter}`)
    );

    console.log(this.state.counter);
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.handleClickPrevState()}>Count Me</button>
      </div>
    );
  }
}

export default SetStateCounter;
