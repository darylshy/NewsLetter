import React, { useState } from "react";
import UsernameTemplate from "../../templates/UsernameTemplate/UsernameTemplate";
import { verbiage } from "../../constants/verbiage";
import * as actions from "../../store/actions";
import {
  INPUT_TYPES,
  INPUT_PROPS,
  COMPONENT_TYPES
} from "../../constants/constants";
import { connect } from "react-redux";

const Username = props => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = e => {
    const inputVal = Object.assign({}, { ...inputValue });
    inputVal[e.target.dataset.type] = e.target.value;
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
