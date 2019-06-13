import React from "react";

const Checkbox = props => {
  return <input type="checkbox" onChange={props.handleChecked} />;
};

export default Checkbox;
