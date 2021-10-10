import React from "react";

function Person({ fam }) {
  return (
    <div>
      <h1>
        Hi i am {fam.name} i am {fam.age} years old
      </h1>
    </div>
  );
}

export default Person;
