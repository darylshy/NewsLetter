import React from "react";
import { verbiage } from "../../constants/verbiage";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div style={{ color: "white" }}>
      <h1>{verbiage.privacyPolicy}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt obcaecati
        quae ipsam aperiam, vero cumque tempora maiores numquam suscipit
        eligendi? Fuga labore vero nemo error voluptates eos debitis sunt
        inventore!
      </p>
      <Link to="/" from="/privacy" style={{ color: "white" }}>
        Return to Sign Up Page
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
