import React from "react";
import "./myStyle.css";
import styles from "./myStyle.module.css";

const inline = {
  /*
        for inline styling react expects object with the key being the property name in camel case
        and value is the string property
    */
  fontSize: "72px",
  color: "green",
};
function Stylesheet() {
  return (
    <div>
      <h1 className={`primary , font-xl`}> hi stylesheet</h1>
      <h1 style={inline}>Inline</h1>
      <h1 className={styles.success}>
        Module . css pros is its locally scoped{" "}
      </h1>
    </div>
  );
}

export default Stylesheet;
