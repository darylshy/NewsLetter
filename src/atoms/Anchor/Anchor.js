import React from "react";
import PropTypes from "prop-types";
import classes from "./Anchor.module.scss";
import { Link } from "react-router-dom";

const Anchor = props => {
  return (
    <Link to={`/${props.link}`} className={classes.Anchor}>
      {props.text}
    </Link>
  );
};

Anchor.propTypes = {
  text: PropTypes.string.isRequired
};

export default Anchor;
