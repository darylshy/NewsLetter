import React from "react";
import PropTypes from "prop-types";
import Header from "../../atoms/Header/Header";
import Header1 from "../../atoms/Header1/Header1";
import Subheader from "../../atoms/Subheader/Subheader";
import classes from "./HeaderMolecule.module.scss";

const ComboHeader = props => {
  return (
    <div className={classes.ComboHeader}>
      <Header>
        <Header1 header={props.header} />
        {props.subheader ? <Subheader subheader={props.subheader} /> : null}
      </Header>
    </div>
  );
};

ComboHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string
};

export default ComboHeader;
