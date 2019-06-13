import React from "react";
import PropTypes from "prop-types";
import classes from "./Paragraph.module.scss";

const Paragraph = props => {
  return (
    <p className={classes.Paragraph}>
      {props.text}
      {props.children}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;
