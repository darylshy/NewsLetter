import React from "react";
import PropTypes from "prop-types";
import classes from "./Anchor.module.scss";
// import { Link } from "react-router-dom";

const Anchor = props => {
  return (
    <a className={classes.Anchor} href="#">
      {props.text}
    </a>
  );
};

Anchor.propTypes = {
  text: PropTypes.string.isRequired
};

export default Anchor;
