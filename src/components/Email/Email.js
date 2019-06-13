import React, { useState } from "react";
import EmailTemplate from "../../templates/EmailTemplate/EmailTemplate";
import { verbiage } from "../../constants/verbiage";
import { connect } from "react-redux";
import {
  INPUT_TYPES,
  INPUT_PROPS,
  COMPONENT_TYPES
} from "../../constants/constants";
import * as actions from "../../store/actions";

const Email = props => {
  const [inputValue, setInputValue] = useState({});
  const handleChange = e => {
    const inputVal = Object.assign({}, { ...inputValue });
    inputVal[e.target.dataset.type] = e.target.value;
    setInputValue(inputVal);
  };

  const isValidEmail = email => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleClick = e => {
    console.log("email");
    if (isValidEmail(inputValue.email)) {
      props.onSetUserEmail(inputValue.email);
      props.history.push(`/${COMPONENT_TYPES.NAME}`);
    }
  };

  const handleChecked = e => {
    props.onSetPrivacyChecked(e.target.checked);
  };

  return (
    <EmailTemplate
      key={verbiage.join}
      labelText={verbiage.join}
      formButtonText={verbiage.next}
      header={verbiage.signupForNewsLetter}
      formButtonClickHandler={handleClick}
      formInputFields={[
        {
          controlledValue: inputValue,
          inputType: INPUT_TYPES.EMAIL,
          handleChange: handleChange,
          placeholder: verbiage.email,
          required: true,
          inputProp: INPUT_PROPS.EMAIL
        }
      ]}
      footerCheckboxChecked={props.privacyChecked}
      footerCheckboxChangeHandler={handleChecked}
      footerParagraphText={verbiage.agreement}
      footerLinkText={verbiage.privacyPolicy}
      footerLinkEndpoint={COMPONENT_TYPES.PRIVACY}
    />
  );
};

const mapStateToProps = state => {
  return {
    privacyChecked: state.privacy
  };
};

const mapDispatchToProps = dispatch => ({
  onSetUserEmail: email => dispatch({ type: actions.SET_USER_EMAIL, email }),
  onSetPrivacyChecked: checked =>
    dispatch({ type: actions.SET_PRIVACY_CHECKED, checked })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email);
