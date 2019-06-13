import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";

const Button = props => {
  return (
    <button className={classes.Button} onClick={props.handleClick}>
      {props.label.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
