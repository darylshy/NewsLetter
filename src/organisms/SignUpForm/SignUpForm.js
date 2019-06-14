import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import HeaderMolecule from '../../molecules/HeaderMolecule/HeaderMolecule';
import FormMolecule from '../../molecules/FormMolecule/FormMolecule';
import FooterMolecule from '../../molecules/FooterMolecule/FooterMolecule';
import classes from './SignUpForm.module.scss';

const SignUpForm = ({
  labelText,
  formButtonText,
  header,
  subheader,
  formButtonClickHandler,
  formInputFields,
  footerParagraphText,
  footerLinkText,
  footerLinkEndpoint,
  footerCheckboxChangeHandler,
  footerCheckboxChecked
}) => {
  return (
    <div
      className={[
        classes.SignUpForm,
        !formButtonText ? classes.NoForm : ''
      ].join(' ')}
    >
      {labelText && (
        <div>
          <Label label={labelText} />
        </div>
      )}
      <div className={classes.SignUpFormContent}>
        {header && (
          <div className={classes.SignUpFormHeader}>
            <HeaderMolecule header={header} subheader={subheader} />
          </div>
        )}
        {formButtonText && formInputFields && formButtonClickHandler && (
          <div className={classes.SignUpFormForm}>
            <FormMolecule
              buttonText={formButtonText}
              handleClick={formButtonClickHandler}
              inputFields={formInputFields}
              footerCheckboxChecked={footerCheckboxChecked}
            />
          </div>
        )}
        {footerParagraphText && (
          <div className={classes.SignUpFormFooter}>
            <FooterMolecule
              paragraph={footerParagraphText}
              anchor={footerLinkText}
              link={footerLinkEndpoint}
              footerCheckboxChangeHandler={footerCheckboxChangeHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  labelText: PropTypes.string,
  formButtonText: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  formButtonClickHandler: PropTypes.func,
  formInputFields: PropTypes.arrayOf(
    PropTypes.shape({
      controlledValue: PropTypes.object.isRequired,
      inputType: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      inputProp: PropTypes.string
    })
  ),
  footerParagraphText: PropTypes.string,
  footerLinkText: PropTypes.string,
  footerLinkEndpoint: PropTypes.string,
  footerCheckboxChangeHandler: PropTypes.func,
  footerCheckboxChecked: PropTypes.bool
};

export default SignUpForm;
