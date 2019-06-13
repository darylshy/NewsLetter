import React from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/Form";
import Button from "../../atoms/Button/Button";
import ControlledInput from "../../atoms/ControlledInput/ControlledInput";
import classes from "./FormMolecule.module.scss";
import FooterMolecule from "../FooterMolecule/FooterMolecule";

const FormMolecule = props => {
  const getInputFields = () => {
    return props.inputFields.map(
      ({ input, placeholder, handleChange, type, value }, idx) => {
        return (
          <ControlledInput
            key={input + idx}
            placeholder={input}
            handleChange={handleChange}
            type={type}
            value={value[input]}
            input={input}
          />
        );
      }
    );
  };
  return (
    <div className={classes.FormMolecule}>
      <Form>
        <div>{getInputFields()}</div>
        <Button label={props.label} handleClick={props.handleClick} />
      </Form>
    </div>
  );
};

FormMolecule.propTypes = {
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      input: PropTypes.string,
      placeholder: PropTypes.string,
      handleChange: PropTypes.func,
      value: PropTypes.object
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FormMolecule;
