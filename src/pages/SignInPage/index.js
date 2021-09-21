import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  TextField,
  Snackbar,
  CircularProgress,
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core/';
import lockr from 'lockr';
import { HelperText } from '../../components/TextField';
import { useForm, Controller } from 'react-hook-form';
import headerLogo from '../../assets/img/header_logo.svg';
import { actions } from '../../core/services/authorization';
import { bindActionCreators } from 'redux';
import Notification from '../../components/Notification';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import style from './index.module.scss';

// const Alert = () => <MuiAlert elevation={6} variant="filled" />;

const SignInPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { authorizeCustomer, setToken } = bindActionCreators(actions, dispatch);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password, keepSigned }) => {
    setLoading(true);
    authorizeCustomer({ username, password }).then((data) => {
      setLoading(false);
      if (data.error) {
        setErrorText(data.error.message.replace('Error: ', ''));
        setError(true);
      } else {
        const token = data.payload.access_token;
        if (keepSigned) {
          lockr.set('APP_AUTH_KEY', token);
        }
        history.push('/dashboard');
      }
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="page__sign-in">
        <header>
          <Link to="/login" className="no-decoration">
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
                          <FormControl fullWidth className={style.password} error={errors.password ? true : false}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                              {...field}
                              id="standard-adornment-password"
                              type={showPassword ? 'text' : 'password'}
                              // value={value}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                            {errors.password && (
                              <FormHelperText>
                                <HelperText text={errors.password.message} />
                              </FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />

                      <Link className={style.forgot} to="/">
                        Forgot your password?
                      </Link>
                    </Box>
                  </Grid>

                  <Box mt={'auto'} ml={'auto'} mr={'auto'} maxWidth={256}>
                    <Controller
                      name="keepSigned"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControlLabel
                          className={style.keep}
                          control={<Checkbox {...field} name="keepSigned" color="primary" />}
                          label="Keep me signed in on this computer"
                        />
                      )}
                    />
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
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
