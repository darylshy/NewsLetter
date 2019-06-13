import CongratulationsTemplate from "../../templates/CongratulationsTemplate/CongratulationTemplate";
import { verbiage } from "../../constants/verbiage";
import React from "react";

const Complete = () => {
  return (
    <CongratulationsTemplate
      labelText={verbiage.congratulations}
      header={verbiage.thankyou}
      subheader={verbiage.lookout}
    />
  );
};

export default Complete;
