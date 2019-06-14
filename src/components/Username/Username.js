import React, { useState, useEffect, useRef } from "react";
import UsernameTemplate from "../../templates/UsernameTemplate/UsernameTemplate";
import { verbiage } from "../../constants/verbiage";
import * as actions from "../../store/actions";
import classes from "./Username.module.scss";
import {
  INPUT_TYPES,
  INPUT_PROPS,
  COMPONENT_TYPES
} from "../../constants/constants";
import { connect } from "react-redux";

const Username = props => {
  const [inputValue, setInputValue] = useState({ dirty: false });
  const usernameRef = useRef(null);
  const regexValidName = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  useEffect(() => {
    const [firstname, lastname] = usernameRef.current.querySelectorAll("input");
    firstname.setAttribute("pattern", regexValidName);
    lastname.setAttribute("pattern", regexValidName);
  }, []);
  useEffect(() => {
    const [firstname, lastname] = usernameRef.current.querySelectorAll("input");
    const formDiv = usernameRef.current.querySelector("form > div");
    addRemoveClassName(firstname, formDiv);
    addRemoveClassName(lastname, formDiv);
  }, [inputValue]);

  const addRemoveClassName = (input, formDiv) => {
    const isValid = input.checkValidity();
    if (isValid) {
      input.classList.add(classes.Valid);
      input.classList.remove(classes.Invalid);
      formDiv.classList.add(classes.Valid);
      formDiv.classList.remove(classes.Invalid);
    } else if (!isValid && !inputValue.dirty) {
      input.classList.remove(classes.Valid);
      input.classList.remove(classes.Invalid);
      formDiv.classList.add(classes.Valid);
      formDiv.classList.remove(classes.Invalid);
    } else {
      input.classList.add(classes.Invalid);
      input.classList.remove(classes.Valid);
      formDiv.classList.add(classes.Invalid);
      formDiv.classList.remove(classes.Valid);
    }
  };

  const handleChange = e => {
    const inputVal = Object.assign({}, { ...inputValue });
    inputVal[e.target.dataset.type] = e.target.value;
    inputVal.dirty = true;
    setInputValue(inputVal);
  };

  const handleClick = e => {
    if (inputValue.firstname && inputValue.lastname) {
      props.onSetUsername(inputValue);
      logUserInfo();
      props.history.push(`/${COMPONENT_TYPES.COMPLETE}`);
    }
  };

  const logUserInfo = () => {
    const { firstname, lastname, email } = props.userInfo;
    console.log(
      `First Name: ${firstname} -- Last Name: ${lastname} --  Email: ${email}`
    );
  };

  return (
    <div ref={usernameRef} className={classes.Username}>
      <UsernameTemplate
        labelText={verbiage.join}
        formButtonText={verbiage.next}
        header={verbiage.almostDone}
        formButtonClickHandler={handleClick}
        formInputFields={[
          {
            controlledValue: inputValue,
            inputType: INPUT_TYPES.TEXT,
            handleChange: handleChange,
            placeholder: verbiage.firstname,
            required: true,
            inputProp: INPUT_PROPS.FIRST_NAME
          },
          {
            controlledValue: inputValue,
            inputType: INPUT_TYPES.TEXT,
            handleChange: handleChange,
            placeholder: verbiage.lastname,
            required: true,
            inputProp: INPUT_PROPS.LAST_NAME
          }
        ]}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => ({
  onSetUsername: username => dispatch({ type: actions.SET_USER_NAME, username })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Username);
