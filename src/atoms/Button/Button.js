import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={classes.Button}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.buttonText.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
