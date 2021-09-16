import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Checkbox, FormControlLabel, Grid, Box } from '@material-ui/core/';

import { actions } from '../../core/services/customers/';

import headerLogo from '../../assets/img/header_logo.svg';

import style from './index.module.scss';

const SignInPage = () => {
  const state = useSelector((state) => state.customers.value);
  const dispatch = useDispatch();

  console.log('actions', actions);
  useEffect(() => {
    // dispatch(actions.increment());
    // dispatch(incrementAsync()).then((data) => {
    //   console.log('data', data);
    // });
  }, []);

  const onSubmit = (e) => {
    const form = new FormData(e.target);
    console.log('submit', form);
    e.preventDefault();
  };

  return (
    <div className="page__sign-in">
      <header>
        <Link to="/" className="no-decoration">
          <img src={headerLogo} alt="logo" />
        </Link>
        <Link to="/sign-up">Create an account</Link>
      </header>
      <div className="wrapper">
        <div className={style['form-wrapper']}>
          <div className={style.form}>
            <form onSubmit={onSubmit}>
              <Grid container direction="column" wrap="nowrap">
                <Grid item>
                  <h2 className="h2">
                    Welcome to a <b>More Efficient Lab</b>
                  </h2>
                </Grid>
                <Grid item>
                  <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={256}>
                    <TextField
                      error={false}
                      label="Email"
                      name="email"
                      fullWidth
                      // defaultValue='Hello World'
                      // helperText={
                      //   <>
                      //     <b>Full Name</b> is required to add <br /> shipping
                      //     address
                      //   </>
                      // }
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={256}>
                    <TextField
                      error={false}
                      label="Error"
                      fullWidth
                      type="password"
                      // defaultValue='Hello World'
                      // helperText={
                      //   <>
                      //     <b>Full Name</b> is required to add <br /> shipping address
                      //   </>
                      // }
                    />
                    <Link className={style.forgot} to="/">
                      Forgot your password?
                    </Link>
                  </Box>
                </Grid>

                <Box mt={'auto'} ml={'auto'} mr={'auto'} maxWidth={256}>
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name="checkedA" color="primary" />}
                    label="Keep me signed in on this computer"
                  />
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth type="submit">
                      Sign In
                    </Button>
                  </Box>
                  <div className={style.create}>
                    Don’t have an account? <Link to="/">Create an account</Link>
                  </div>
                </Box>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
