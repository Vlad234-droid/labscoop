import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../../pages/SignInPage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isloggedIn = useSelector((state) => state.authorization.isloggedIn);

  console.log('isloggedIn', isloggedIn);

  const CurrentComponent = isloggedIn ? <Component /> : <Redirect to="/login" />;

  // const CurrentComponent = isloggedIn ? (
  //   !userData ? (
  //     <LoadingPage />
  //   ) : !isAdmin ? (
  //     userData.profile.id_status ? (
  //       <Component />
  //     ) : (
  //       <DocSign />
  //     )
  //   ) : (
  //     <Redirect to="/admin/clients" />
  //   )
  // ) : (
  //   <Redirect to="/sign-in/" />
  // );
  //const CurrentComponent = isloggedIn ? (
  //  !userData ? (
  //    <LoadingPage />
  //  ) : !isAdmin ? (
  //    !userData.profile?.id_status ? (
  //      <Redirect to="/docSign" />
  //    ) : (
  //      <Component />
  //    )
  //  ) : (
  //    <Redirect to="/admin/clients" />
  //  )
  //) : (
  //  <Redirect to="/sign-in/" />
  //);

  return <Route {...rest} render={(props) => CurrentComponent} />;
};

export default PrivateRoute;
