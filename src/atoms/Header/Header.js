import React from "react";
import classes from "./Header.module.scss";

const Header = props => {
  return <header className={classes.Header}>{props.children}</header>;
};

export default Header;
