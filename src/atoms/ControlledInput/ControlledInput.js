import React from "react";
import PropTypes from "prop-types";
import classes from "./ControlledInput.module.scss";

const Input = props => {
  return (
    <input
      className={classes.ControlledInput}
      type={props.type}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      data-type={props.input}
    />
  );
};

Input.defaultProps = {
  placeholder: "Enter text:",
  required: true,
  value: ""
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default Input;
