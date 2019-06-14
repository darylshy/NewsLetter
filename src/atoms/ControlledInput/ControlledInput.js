import React from 'react';
import PropTypes from 'prop-types';
import classes from './ControlledInput.module.scss';

const Input = props => {
  return (
    <input
      className={classes.ControlledInput}
      type={props.inputType}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      value={props.controlledValue}
      required={props.required}
      data-type={props.inputProp}
    />
  );
};

Input.defaultProps = {
  placeholder: 'Enter text:',
  required: true,
  controlledValue: ''
};

Input.propTypes = {
  controlledValue: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  inputProp: PropTypes.string
};

export default Input;
