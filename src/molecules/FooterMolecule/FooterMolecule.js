import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Anchor from '../../atoms/Anchor/Anchor';
import classes from './FooterMolecule.module.scss';

const FooterMolecule = props => {
  return (
    <div className={classes.FooterMolecule}>
      <div>
        <Checkbox handleChecked={props.footerCheckboxChangeHandler} />
      </div>
      <div>
        <Paragraph text={props.paragraph}>
          <Anchor text={props.anchor} link={props.link} />
        </Paragraph>
      </div>
    </div>
  );
};

FooterMolecule.propTypes = {
  paragraph: PropTypes.string.isRequired,
  anchor: PropTypes.string,
  footerCheckboxChangeHandler: PropTypes.func,
  link: PropTypes.string
};

export default FooterMolecule;
