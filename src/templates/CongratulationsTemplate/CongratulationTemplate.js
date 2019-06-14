import React from 'react';
import PropTypes from 'prop-types';
import classes from './CongratulationsTemplate.module.scss';
import SignUpForm from '../../organisms/SignUpForm/SignUpForm';

const CongratulationsTemplate = ({ labelText, header, subheader }) => {
  return (
    <div className={classes.CongratulationsTemplate}>
      <SignUpForm labelText={labelText} header={header} subheader={subheader} />
    </div>
  );
};

CongratulationsTemplate.propTypes = {
  labelText: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired
};

export default CongratulationsTemplate;
