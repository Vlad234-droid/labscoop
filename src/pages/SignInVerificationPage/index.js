import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, Grid, Box, TextField, CircularProgress } from '@material-ui/core/';

import headerLogo from '../../assets/img/header_logo.svg';
import { useLocation } from 'react-router-dom';
import style from './index.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { HelperText } from '../../components/TextField';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actions } from '../../core/services/customers';
import { useSelector } from 'react-redux';
import Notification from '../../components/Notification';
import lockr from 'lockr';
import { useHistory } from 'react-router-dom';

const SignInVerificationPage = () => {
  const customers = useSelector((state) => state.customers);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [error, setError] = useState(false);
  const [valuee, setValuee] = useState(null);
  const history = useHistory();

  const location = useLocation();

  const dispatch = useDispatch();

  const { validateCustomerEmail } = bindActionCreators(actions, dispatch);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (location.hash !== '') {
      setValuee(() => location.hash.substring(1));
    } else {
      setValuee(() => '');
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(() => true);
    validateCustomerEmail({ hash: data.hash, email: lockr.get('email') }).then((tt) => {
      if (tt.error) {
        setErrorText(tt.error.message.replace('Error: ', ''));
        setError(true);
      }
      if (!tt.error) {
        history.push('/');
      }
      setLoading(() => false);
    });
  };

  return (
    <>
      <div className="page__sign-in">
        <header>
          <Link to="/login">
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
                    <h3>We’ve sent you a verification code on your email</h3>
                  </Grid>
                  <Grid item>
                    <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={256}>
                      {valuee !== null && (
                        <Controller
                          control={control}
                          name="hash"
                          defaultValue={valuee}
                          rules={{
                            required: (
                              <>
                                <b>Code</b> is required
                              </>
                            ),
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              error={errors.hash !== undefined}
                              label="Enter the code"
                              fullWidth
                              helperText={errors.hash !== undefined ? <HelperText text={errors.hash.message} /> : false}
                            />
                          )}
                        />
                      )}

                      <div className={style.forgot}>
                        Didn’t receive the code? <Link to="/">Send again</Link>
                      </div>
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

export default SignInVerificationPage;
