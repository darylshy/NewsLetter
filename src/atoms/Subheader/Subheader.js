import React from 'react';
import PropTypes from 'prop-types';
import classes from './Subheader.module.scss';

const Subheader = props => {
  return <h3 className={classes.Subheader}>{props.subheader}</h3>;
};

Subheader.propTypes = {
  subheader: PropTypes.string.isRequired
};

export default Subheader;
