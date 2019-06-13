import React, { useState } from "react";
import NewsLetter from "./organisms/NewsLetter/NewsLetter";

const App = () => {
  const [inputValue, setInputValue] = useState({});
  const [formSubmitValue, setFormSubmitValue] = useState({});

  const handleChange = e => {
    const inputVal = Object.assign({}, { ...inputValue });
    inputVal[e.target.dataset.type] = e.target.value;
    setInputValue(inputVal);
  };

  const handleClick = e => {
    console.log(e);
    setFormSubmitValue(e.target);
  };

  return (
    <div
      className="App"
      style={{
        background: "#131122",
        padding: "10px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <NewsLetter
        labelText="Congratulations!"
        header="Thank you for signing up!"
        subheader="Look out for the latest news on your favorite shows."
        // formLabelText="sign up"
        formButtonClickHandler={handleClick}
        formInputFields={[
          {
            input: "first name",
            handleChange,
            type: "text",
            value: inputValue
          },
          { input: "last name", handleChange, type: "text", value: inputValue }
        ]}
        // footerParagraphText="I agree to receive information from Discovery Communications in accordance with the following"
        footerLinkText="Privacy Policy"
        footerLinkEndpoint="privacy"
      />
    </div>
  );
};

export default App;
