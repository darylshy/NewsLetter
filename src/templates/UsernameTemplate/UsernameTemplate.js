import React from "react";
import PropTypes from "prop-types";
import classes from "./UsernameTemplate.module.scss";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm";

const UsernameTemplate = ({
  labelText,
  formButtonText,
  header,
  formButtonClickHandler,
  formInputFields,
  footerParagraphText,
  footerLinkText,
  footerLinkEndpoint
}) => {
  return (
    <div className={classes.UsernameTemplate}>
      <SignUpForm
        labelText={labelText}
        formButtonText={formButtonText}
        header={header}
        formButtonClickHandler={formButtonClickHandler}
        formInputFields={formInputFields}
        footerParagraphText={footerParagraphText}
        footerLinkText={footerLinkText}
        footerLinkEndpoint={footerLinkEndpoint}
        footerCheckboxChecked={true}
      />
    </div>
  );
};

UsernameTemplate.propTypes = {
  labelText: PropTypes.string.isRequired,
  formButtonText: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  formButtonClickHandler: PropTypes.func.isRequired,
  formInputFields: PropTypes.arrayOf(
    PropTypes.shape({
      controlledValue: PropTypes.object.isRequired,
      inputType: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      inputProp: PropTypes.string
    })
  ).isRequired
};

export default UsernameTemplate;
