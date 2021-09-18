import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  TextField,
  Snackbar,
  CircularProgress,
} from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';
import { HelperText } from '../../components/TextField';
import { useForm, Controller } from 'react-hook-form';
import headerLogo from '../../assets/img/header_logo.svg';
import style from './index.module.scss';
import { actions } from '../../core/services/authorization';
import { bindActionCreators } from 'redux';
import Notification from '../../components/Notification';

// const Alert = () => <MuiAlert elevation={6} variant="filled" />;

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const dispatch = useDispatch();
  const { authorizeCustomer } = bindActionCreators(actions, dispatch);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    setLoading(true);
    authorizeCustomer({ username, password }).then((data) => {
      console.log('scooterok', data);

      setLoading(false);
      if (data.error) {
        setErrorText(data.error.message.replace('Error: ', ''));
        setError(true);
      }
    });
  };

  // const onSubmit = (e) => {
  //   const form = new FormData(e.target);
  //   e.preventDefault();
  //   console.log('email', form.get('email'));
  //   console.log('password', form.get('password'));
  // };

  return (
    <>
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
                          required: (
                            <>
                              <b>Email</b> is required <br />
                            </>
                          ),
                          validate: (value) => {
                            const re =
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (re.test(value)) {
                              return true;
                            } else {
                              return (
                                <>
                                  <b>Email</b> is not valid
                                </>
                              );
                            }
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
                              errors.username !== undefined ? <HelperText text={errors.username.message} /> : false
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
                        rules={{
                          required: (
                            <>
                              <b>Password</b> is required <br />
                            </>
                          ),
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            error={errors.password !== undefined}
                            label="Password"
                            fullWidth
                            type="password"
                            helperText={
                              errors.password !== undefined ? <HelperText text={errors.password.message} /> : false
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
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        className={loading ? 'loading' : ''}>
                        {loading ? <CircularProgress color="inherit" size={loading ? 25 : 0} /> : 'Sign In'}
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
      <Notification
        error={error}
        setError={setError}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
        errorText={errorText}
      />
    </>
  );
};

export default SignInPage;
