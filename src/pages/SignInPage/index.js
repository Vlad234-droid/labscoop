import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, FormControlLabel, Grid, Box, TextField } from '@material-ui/core/';
// import TextField from '../../components/TextField';
import { HelperText } from '../../components/TextField';
import { useForm, Controller } from 'react-hook-form';
import headerLogo from '../../assets/img/header_logo.svg';
import style from './index.module.scss';
import { actions } from '../../core/services/authorization';
import { bindActionCreators } from 'redux';

const SignInPage = () => {
  const state = useSelector((state) => state.customers.value);
  const dispatch = useDispatch();
  const { authorizeCustomer } = bindActionCreators(actions, dispatch);
  const [form, setForm] = useState({
    email: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    authorizeCustomer({ username, password }).then((data) => console.log('data', data));
  };

  // const onSubmit = (e) => {
  //   const form = new FormData(e.target);
  //   e.preventDefault();
  //   console.log('email', form.get('email'));
  //   console.log('password', form.get('password'));
  // };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction="column" wrap="nowrap">
                <Grid item>
                  <h2 className="h2">
                    Welcome to a <b>More Efficient Lab</b>
                  </h2>
                </Grid>
                <Grid item>
                  <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={256}>
                    <Controller
                      name="username"
                      defaultValue=""
                      rules={{
                        required: true,
                        validate: (value) => {
                          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          return re.test(value);
                        },
                      }}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={errors.username !== undefined}
                          label="Email"
                          name="email"
                          fullWidth
                          helperText={
                            errors.username !== undefined ? (
                              <HelperText
                                text={
                                  <>
                                    <b>Full Name</b> is required to add <br /> shipping address
                                  </>
                                }
                              />
                            ) : null
                          }
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid item>
                  <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={256}>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={errors.password !== undefined}
                          label="Password"
                          fullWidth
                          type="password"
                          helperText={
                            errors.password !== undefined ? (
                              <HelperText
                                text={
                                  <>
                                    <b>Full Name</b> is required to add <br /> shipping address
                                  </>
                                }
                              />
                            ) : null
                          }
                        />
                      )}
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
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Sign In
                    </Button>
                  </Box>
                  <div className={style.create}>
                    Don’t have an account? <Link to="/sign-up">Create an account</Link>
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
