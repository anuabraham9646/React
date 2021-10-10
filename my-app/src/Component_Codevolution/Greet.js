import React from "react";

export function Greet(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>{props.children[0]}</h2>
    </div>
  );
}

export const GreetEs6 = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};
