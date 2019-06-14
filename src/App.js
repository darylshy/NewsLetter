import React, { lazy, Suspense } from 'react';
import classes from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { COMPONENT_TYPES } from './constants/constants';
import Email from './components/Email/Email';
const Username = lazy(() => import('./components/Username/Username'));
const Complete = lazy(() => import('./components/Complete/Complete'));
const PrivacyPolicy = lazy(() =>
  import('./components/PrivacyPolicy/PrivacyPolicy')
);

const App = props => {
  return (
    <div className={['App', classes.App].join(' ')}>
      <Switch>
        <Route path="/" exact component={() => <Email {...props} />} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route
            path={`/${COMPONENT_TYPES.NAME}`}
            exact
            render={() => <Username {...props} />}
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
        </Suspense>
        <Route path="*" exact component={() => <Email {...props} />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
