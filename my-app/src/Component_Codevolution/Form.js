import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tech: "Vue",
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleTech = (event) => {
    this.setState({ tech: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.name} ${this.state.tech} `);

    event.preventDefault();
  };

  render() {
    const { name, tech } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name </label>
          <input type="text" value={name} onChange={this.handleName}></input>
        </div>

        <div>
          <label>Tech </label>
          <select value={tech} onChange={this.handleTech}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
