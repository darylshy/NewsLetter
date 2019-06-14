import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header1.module.scss';

const Header1 = props => {
  return <h1 className={classes.Header1}>{props.header.toUpperCase()}</h1>;
};

Header1.propTypes = {
  header: PropTypes.string.isRequired
};

export default Header1;
