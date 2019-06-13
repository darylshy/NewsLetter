import React from "react";
import classes from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Email from "./components/Email/Email";
import Username from "./components/Username/Username";
import Complete from "./components/Complete/Complete";
import { COMPONENT_TYPES } from "./constants/constants";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

const App = props => {
  return (
    <div className={["App", classes.App].join(" ")}>
      <Switch>
        <Route path="/" exact component={() => <Email {...props} />} />
        <Route
          path={`/${COMPONENT_TYPES.NAME}`}
          exact
          component={() => <Username {...props} />}
        />
        <Route
          path={`/${COMPONENT_TYPES.COMPLETE}`}
          exact
          component={() => <Complete {...props} />}
        />
        <Route
          path={`/${COMPONENT_TYPES.PRIVACY}`}
          exact
          component={() => <PrivacyPolicy />}
        />
        <Route path="*" exact component={() => <Email {...props} />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
