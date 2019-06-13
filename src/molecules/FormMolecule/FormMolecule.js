import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/Form";
import Button from "../../atoms/Button/Button";
import ControlledInput from "../../atoms/ControlledInput/ControlledInput";
import classes from "./FormMolecule.module.scss";

const FormMolecule = props => {
  const getInputFields = () => {
    return props.inputFields.map(
      (
        { inputProp, placeholder, handleChange, inputType, controlledValue },
        idx
      ) => {
        return (
          <ControlledInput
            key={inputProp + idx}
            placeholder={placeholder}
            handleChange={handleChange}
            inputType={inputType}
            controlledValue={controlledValue[inputProp]}
            inputProp={inputProp}
          />
        );
      }
    );
  };
  return (
    <div className={classes.FormMolecule}>
      <Form>
        <div>{getInputFields()}</div>
        <Button
          buttonText={props.buttonText}
          handleClick={props.handleClick}
          disabled={!props.footerCheckboxChecked}
        />
      </Form>
    </div>
  );
};

FormMolecule.propTypes = {
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      controlledValue: PropTypes.object.isRequired,
      inputType: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      inputProp: PropTypes.string
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default FormMolecule;
