import React from 'react';
import { Route } from 'react-router-dom';
// import PrivateRoute from "./PrivatRouter";
// import PrivateAdminRoute from "./PrivatAdminRouter";
import CoreRouter from './CoreRouter';

import SignIn from '../../pages/SignInPage';
import SignUp from '../../pages/SignUpPage';
import SignInVerificationPage from '../../pages/SignInVerificationPage';

//TODO Lazy
function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}

// const ProfilePage = lazyWithPreload(() => import("../../pages/ProfilePage"));

const routes = () => {
  return (
    <React.Suspense fallback="">
      <CoreRouter>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/email-verification/:id" component={SignInVerificationPage} />
        <Route exact path="/email-verification" component={SignInVerificationPage} />
        <Route exact path="/sign-up" component={SignUp} />

        {/* <PrivateRoute exact path="/profile/add-project/" component={AddProjectPage} />
        <PrivateAdminRoute exact path="/admin/clients" component={AdminClientsPage} /> */}
        {/* <PrivateRoute exact path='/replies/' component={Login} /> */}
      </CoreRouter>
    </React.Suspense>
  );
};

export default routes;
