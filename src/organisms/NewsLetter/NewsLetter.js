import React from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import HeaderMolecule from "../../molecules/HeaderMolecule/HeaderMolecule";
import FormMolecule from "../../molecules/FormMolecule/FormMolecule";
import FooterMolecule from "../../molecules/FooterMolecule/FooterMolecule";
import classes from "./NewsLetter.module.scss";

const NewsLetter = ({
  labelText,
  formLabelText,
  header,
  subheader,
  formButtonClickHandler,
  formInputFields,
  footerParagraphText,
  footerLinkText,
  footerLinkEndpoint
}) => {
  return (
    <div
      className={[
        classes.NewsLetter,
        !formLabelText ? classes.NoForm : ""
      ].join(" ")}
    >
      {labelText && (
        <div>
          <Label label={labelText} />
        </div>
      )}
      <div className={classes.NewsLetterContent}>
        {header && (
          <div className={classes.NewsLetterHeader}>
            <HeaderMolecule header={header} subheader={subheader} />
          </div>
        )}
        {formLabelText && formInputFields && formButtonClickHandler && (
          <div className={classes.NewsLetterForm}>
            <FormMolecule
              label={formLabelText}
              handleClick={formButtonClickHandler}
              inputFields={formInputFields}
            />
          </div>
        )}
        {footerParagraphText && (
          <div className={classes.NewsLetterFooter}>
            <FooterMolecule
              paragraph={footerParagraphText}
              anchor={footerLinkText}
              link={footerLinkEndpoint}
            />
          </div>
        )}
      </div>
    </div>
  );
};

NewsLetter.propTypes = {
  labelText: PropTypes.string,
  formLabelText: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  formButtonClickHandler: PropTypes.func,
  formInputFields: PropTypes.arrayOf(
    PropTypes.shape({
      input: PropTypes.string,
      handleChange: PropTypes.func,
      type: PropTypes.string,
      value: PropTypes.object
    })
  ),
  footerParagraphText: PropTypes.string,
  footerLinkText: PropTypes.string,
  footerLinkEndpoint: PropTypes.string
};

export default NewsLetter;
