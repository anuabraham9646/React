import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let ternaryMessage = this.state.isLoggedIn ? (
      <h1>Hi Joe from ternary </h1>
    ) : (
      <h1>Hi User</h1>
    );

    let message;
    if (this.state.isLoggedIn) message = <div>Hey Joe</div>;
    else message = <div>Hey Guest</div>;

    return (
      <div>
        {message}
        {ternaryMessage}
      </div>
    );
  }
}

export default ConditionalRendering;
