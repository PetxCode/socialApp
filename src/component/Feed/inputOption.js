import React from "react";
import "./inputOptions.css";

function InputFeedOption({ onClick, title, Icon, color }) {
  return (
    <div className="inputOtion" onClick={onClick}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputFeedOption;
