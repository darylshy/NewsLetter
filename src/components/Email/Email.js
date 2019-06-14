import React, { useState, useEffect, useRef } from 'react';
import EmailTemplate from '../../templates/EmailTemplate/EmailTemplate';
import { verbiage } from '../../constants/verbiage';
import { connect } from 'react-redux';
import {
  INPUT_TYPES,
  INPUT_PROPS,
  COMPONENT_TYPES
} from '../../constants/constants';
import * as actions from '../../store/actions';
import classes from './Email.module.scss';

const Email = props => {
  const emailRef = useRef(null);
  const [inputValue, setInputValue] = useState({ dirty: false });
  const regexEmail =
    '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$';
  useEffect(() => {
    const emailInput = emailRef.current.querySelector('input');
    emailInput.setAttribute('pattern', regexEmail);
    const formDiv = emailRef.current.querySelector('form > div');
    const isValid = emailInput.checkValidity();
    if (isValid) {
      emailInput.classList.add(classes.Valid);
      emailInput.classList.remove(classes.Invalid);
      formDiv.classList.add(classes.Valid);
      formDiv.classList.remove(classes.Invalid);
    } else if (!isValid && !inputValue.dirty) {
      emailInput.classList.remove(classes.Valid);
      emailInput.classList.remove(classes.Invalid);
      formDiv.classList.add(classes.Valid);
      formDiv.classList.remove(classes.Invalid);
    } else {
      emailInput.classList.add(classes.Invalid);
      emailInput.classList.remove(classes.Valid);
      formDiv.classList.add(classes.Invalid);
      formDiv.classList.remove(classes.Valid);
    }
  }, [inputValue]);
  const handleChange = e => {
    const inputVal = Object.assign({}, { ...inputValue });
    inputVal[e.target.dataset.type] = e.target.value;
    inputVal.dirty = true;
    setInputValue(inputVal);
  };

  const handleClick = e => {
    e.preventDefault();
    const emailInput = emailRef.current.querySelector('input');
    if (emailInput.checkValidity()) {
      props.onSetUserEmail(inputValue.email);
      props.history.push(`/${COMPONENT_TYPES.NAME}`);
    }
  };

  const handleChecked = e => {
    props.onSetPrivacyChecked(e.target.checked);
  };

  return (
    <div className={classes.Email} ref={emailRef}>
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
    </div>
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
