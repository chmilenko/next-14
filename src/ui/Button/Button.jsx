import React from "react";
import "./Button.scss";

function Button({ props }) {
  return (
    <button
      className={!props?.class ? "button" : `button_${props?.class}`}
      onClick={props.click}
    >
      {props?.text}
    </button>
  );
}

export default Button;
