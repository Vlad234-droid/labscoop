import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { HelperText } from '../../../components/TextField';
import {
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  FormHelperText,
  CircularProgress,
} from '@material-ui/core/';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import style from '../index.module.scss';

const StepPassword = ({ onSubmit, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="step_slide">
      <Grid container>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" wrap="nowrap">
              <Grid item>
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Password</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const min = value.length >= 8;
                        const upper = /[A-Z]{3}([0-9]{1,4})?|[A-Z]{1,3}/.test(value);
                        const number = /.*[0-9].*/.test(value);
                        const special = /.*[!@#$%^&*()_].*/.test(value);

                        if (min && upper && number && special) {
                          return true;
                        } else {
                          return (
                            <>
                              {!min && (
                                <p>
                                  <b>Password</b> must be at least 8 characters!
                                </p>
                              )}
                              {!upper && (
                                <p>
                                  <b>Password</b> should consist of: upper and lower case letters
                                </p>
                              )}
                              {!number && (
                                <p>
                                  <b>Password</b> should consist of: at least 1 number
                                </p>
                              )}
                              {!special && (
                                <p>
                                  <b>Password</b> should consist of: at least 1 special character
                                </p>
                              )}
                            </>
                          );
                        }

                        // { min: 8, message: 'Password must be at least 8 characters!' },
                        // { required: true, message: 'Please input your password!' },
                        // {
                        //   pattern: /[A-Z]{3}([0-9]{1,4})?|[A-Z]{1,3}/,
                        //   message: 'Password should consist of: upper and lower case letters',
                        // },
                        // {
                        //   pattern: /.*[0-9].*/,
                        //   message: 'Password should consist of: at least 1 number',
                        // },
                        // {
                        //   pattern: /.*[!@#$%^&*()_].*/,
                        //   message: 'Password should consist of: at least 1 special character',
                        // },
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <FormControl fullWidth className={style.password} error={errors.password ? true : false}>
                          <InputLabel htmlFor="standard-adornment-password">Create Password</InputLabel>
                          <Input
                            {...field}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            // value={value}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
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
                      </>
                    )}
                  />
                </Box>
                <Box maxWidth={320} ml="auto" mr="auto" mb={3} mt={3}>
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name="checkedA" color="primary" />}
                    label={`It's ok to send me occasional emails about Labscoop promotions and news updates`}
                  />
                </Box>
                <Box maxWidth={320} ml="auto" mr="auto">
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name="checkedA" color="primary" />}
                    label={`It's ok to send me Text/SMS updates about my account`}
                  />
                </Box>
              </Grid>

              <Box mt={'auto'} ml={'auto'} mr={'auto'} maxWidth={320}>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="submit"
                    className={loading ? 'loading' : ''}>
                    {loading ? <CircularProgress color="inherit" size={loading ? 25 : 0} /> : 'Next'}
                  </Button>
                </Box>
                <div className={style.create}>
                  Already have an account? <Link to="/login">Sign In</Link>
                </div>
              </Box>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} className={style.featuresBox}>
          <Box p={5}>
            <Box mb={4}>
              <h3 className={style.title}>Secure shopping experience for you</h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Safe transactions</b>
                  <span>Create an account to shop millions of products from thousands of trusted suppliers.</span>
                </li>
                <li>
                  <b>Something else</b>
                  <span>Create an account to shop millions of products from thousands of trusted suppliers.</span>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepPassword;
