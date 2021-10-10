import React from "react";

function ChildMethodToProp(props) {
  return (
    <div>
      <button onClick={() => props.click("Child Component")}>
        Click me to greet Parent
      </button>
    </div>
  );
}

export default ChildMethodToProp;
