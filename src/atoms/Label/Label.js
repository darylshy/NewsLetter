import React from 'react';
import classes from './Label.module.scss';
import PropTypes from 'prop-types';

const Label = props => {
  return <div className={classes.Label}>{props.label}</div>;
};

Label.defaultProps = {
  label: 'Label'
};

Label.propTypes = {
  label: PropTypes.string.isRequired
};

export default Label;
