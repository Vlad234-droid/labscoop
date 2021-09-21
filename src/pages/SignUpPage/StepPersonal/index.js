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
                      required: (
                        <>
                          <b>First Name</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                        return re.test(value) ? true : 'The name must contain only letters, space and dash';
                      },
                      maxLength: {
                        value: 30,
                        message: 'First Name must have a maximum of 30 characters',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.name !== undefined}
                        label="First Name"
                        fullWidth
                        name="name"
                        helperText={errors.name !== undefined ? <HelperText text={errors.name.message} /> : false}
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
                      required: (
                        <>
                          <b>Last Name</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                        return re.test(value) ? true : 'The name must contain only letters, space and dash';
                      },
                      maxLength: {
                        value: 30,
                        message: 'First Name must have a maximum of 30 characters',
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
                          errors.last_name !== undefined ? <HelperText text={errors.last_name.message} /> : false
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
                      required: (
                        <>
                          <b>Phone Number</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const re = /^\+?[0-9][-\(]?\d{3}\)? ?\d{3} ?\d{2} ?\d{2}$/;
                        console.log(re.test(value));
                        return re.test(value) ? true : 'The phone number not valid';
                      },
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
                            helperText={errors.phone !== undefined ? <HelperText text={errors.phone.message} /> : false}
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
                      required: (
                        <>
                          <b>Email</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(value) ? null : 'Enter valid email';
                      },
                    }}
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextField
                          {...field}
                          error={errors.email !== undefined}
                          label="Enter your email"
                          fullWidth
                          name="email"
                          helperText={errors.email !== undefined ? <HelperText text={errors.email.message} /> : false}
                        />
                        <span className="bottom-text">We suggest using the email address you use at work</span>
                      </>
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
                  Already have an account? <Link to="/">Sign In</Link>
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
