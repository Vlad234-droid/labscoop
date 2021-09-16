import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { HelperText } from '../../../components/TextField';
import { Grid, Box, TextField } from '@material-ui/core/';
import style from '../index.module.scss';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const StepPersonal = ({ nextStep, setValuesToSignUp, valuesToSignUp }) => {
  // const [phone, setPhone] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const prev = valuesToSignUp;
    for (let item in data) {
      prev[item] = data[item];
    }
    setValuesToSignUp(() => prev);
    nextStep();
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
                    name="name"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 20,
                      validate: (value) => {
                        const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                        return re.test(value);
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.name !== undefined}
                        label="First Name"
                        fullWidth
                        name="name"
                        helperText={
                          errors.name !== undefined ? (
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
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="last_name"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 20,
                      validate: (value) => {
                        const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                        return re.test(value);
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.last_name !== undefined}
                        label="Last Name"
                        fullWidth
                        name="last_name"
                        helperText={
                          errors.last_name !== undefined ? (
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
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <InputMask {...field} mask="+9(999) 999 99 99" maskChar=" ">
                        {() => (
                          <TextField
                            error={errors.phone !== undefined}
                            type="phone"
                            label="Phone number"
                            name="phone"
                            fullWidth
                            helperText={
                              errors.phone !== undefined ? (
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
                      </InputMask>
                    )}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="email"
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
                        error={errors.email !== undefined}
                        label="Enter your email"
                        fullWidth
                        bottomText="We suggest using the email address you use at work"
                        name="email"
                        helperText={
                          errors.email !== undefined ? (
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

              <Box mt={'auto'} ml={'auto'} mr={'auto'} maxWidth={320}>
                <Box mt={2}>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Next
                  </Button>
                </Box>
                <div className={style.create}>
                  Don’t have an account? <Link to="/">Create an account</Link>
                </div>
              </Box>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} className={style.featuresBox}>
          <Box p={5}>
            <Box mb={4}>
              <h3 className={style.title}>Search for a thousands of products in a comfortable way</h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Quality Discounts</b>
                  <span>Create an account to shop millions of products from thousands of trusted suppliers.</span>
                </li>
                <li>
                  <b>Easy search</b>
                  <span>Create an account to shop millions of products from thousands of trusted suppliers.</span>
                </li>
                <li>
                  <b>Choose now, pay later</b>
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

export default StepPersonal;
