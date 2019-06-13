import React from "react";
import PropTypes from "prop-types";
import classes from "./EmailTemplate.module.scss";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm";
import Email from "../../components/Email/Email";

const EmailTemplate = ({
  labelText,
  formButtonText,
  header,
  formButtonClickHandler,
  formInputFields,
  footerParagraphText,
  footerLinkText,
  footerLinkEndpoint,
  footerCheckboxChangeHandler,
  footerCheckboxChecked
}) => {
  return (
    <div className={classes.EmailTemplate}>
      <SignUpForm
        labelText={labelText}
        formButtonText={formButtonText}
        header={header}
        formButtonClickHandler={formButtonClickHandler}
        formInputFields={formInputFields}
        footerParagraphText={footerParagraphText}
        footerLinkText={footerLinkText}
        footerLinkEndpoint={footerLinkEndpoint}
        footerCheckboxChangeHandler={footerCheckboxChangeHandler}
        footerCheckboxChecked={footerCheckboxChecked}
      />
    </div>
  );
};

EmailTemplate.defaultProps = {
  footerCheckboxChecked: false
};

EmailTemplate.propTypes = {
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
  ).isRequired,
  footerParagraphText: PropTypes.string.isRequired,
  footerLinkText: PropTypes.string.isRequired,
  footerLinkEndpoint: PropTypes.string.isRequired,
  footerCheckboxChangeHandler: PropTypes.func.isRequired,
  footerCheckboxChecked: PropTypes.bool.isRequired
};

export default EmailTemplate;
