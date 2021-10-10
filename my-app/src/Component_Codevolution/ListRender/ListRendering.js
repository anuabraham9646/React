import React from "react";
import Person from "./Person";

function ListRendering() {
  let family = [
    {
      id: 1,
      name: "Anu",
      age: 24,
    },
    {
      id: 2,
      name: "Susan",
      age: 44,
    },
    {
      id: 3,
      name: "papachan",
      age: 54,
    },
    {
      id: 4,
      name: "Omana & Thankamma",
      age: 64,
    },
  ];
  /*                  By default the key of the component if not specified explicitly then the index of the array is used
                    that can be an anti pattern 
                    only use this if 3 conditions 
                    1 if there are no unique keys 
                    2 if the list is static and doesnt change  
                    3 if the content in list isnt filtered or sorted  */
  const render = family.map((person) => (
    <Person key={person.id} fam={person} />
  ));
  return <div>{render}</div>;
}

export default ListRendering;
