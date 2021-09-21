import React from 'react';
import { Route } from 'react-router-dom';
// import PrivateRoute from "./PrivatRouter";
// import PrivateAdminRoute from "./PrivatAdminRouter";
import CoreRouter from './CoreRouter';

import SignIn from '../../pages/SignInPage';
import SignUp from '../../pages/SignUpPage';
import SignInVerificationPage from '../../pages/SignInVerificationPage';
import ListingPage from '../../pages/ListingPage';
import Dashboard from '../../pages/Dashboard';

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
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/email-verification/:id" component={SignInVerificationPage} />
        <Route exact path="/email-verification" component={SignInVerificationPage} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/listing" component={ListingPage} />
        <Route exact path="/dashboard" component={Dashboard} />

        {/* <PrivateRoute exact path="/profile/add-project/" component={AddProjectPage} />
        <PrivateAdminRoute exact path="/admin/clients" component={AdminClientsPage} /> */}
        {/* <PrivateRoute exact path='/replies/' component={Login} /> */}
      </CoreRouter>
    </React.Suspense>
  );
};

export default routes;
