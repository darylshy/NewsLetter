import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header1.module.scss';

const Header1 = props => {
  return (
    <h1 style={{ color: '#94aebf' }} className={classes.Header1}>
      {props.header.toUpperCase()}
    </h1>
  );
};

Header1.defaultProps = {
  header: 'Header 1'
};

Header1.propTypes = {
  header: PropTypes.string.isRequired
};

export default Header1;
