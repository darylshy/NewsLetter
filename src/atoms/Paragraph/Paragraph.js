import React from 'react';
import PropTypes from 'prop-types';
import classes from './Paragraph.module.scss';

const Paragraph = props => {
  return (
    <p className={classes.Paragraph}>
      {props.text}
      {props.children}
    </p>
  );
};

Paragraph.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa incidunt possimus amet, est repellat sit architecto voluptatum magnam saepe, laborum maxime deleniti id corporis reiciendis odit nostrum! Alias, beatae dignissimos.'
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;
