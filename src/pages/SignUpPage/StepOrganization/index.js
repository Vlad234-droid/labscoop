import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText } from '@material-ui/core/';
import { useForm, Controller } from 'react-hook-form';
import { HelperText } from '../../../components/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import style from '../index.module.scss';

const StepOrganization = ({ nextStep, setValuesToSignUp, valuesToSignUp }) => {
  const [phone, setPhone] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const prev = { ...valuesToSignUp };
    prev.organization = {};
    for (let item in data) {
      prev.organization[item] = data[item];
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
                    name="type"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Organization Type</b> is required
                        </>
                      ),
                    }}
                    render={({ field }) => (
                      <>
                        <FormControl fullWidth error={errors.type !== undefined}>
                          <InputLabel id="demo-simple-select-label">Organization Type</InputLabel>
                          <Select
                            {...field}
                            // labelId='demo-simple-select-label'
                            // id='demo-simple-select'
                            // value={age}
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Type 1</MenuItem>
                            <MenuItem value={20}>Type 2</MenuItem>
                            <MenuItem value={30}>Type 3</MenuItem>
                          </Select>
                          {errors.type && (
                            <FormHelperText>
                              <HelperText text={errors.type.message} />
                            </FormHelperText>
                          )}
                        </FormControl>
                      </>
                    )}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Organization Name</b> is required
                        </>
                      ),
                      validate: (value) => {
                        const re = /^[a-zA-Z]+(([',. _-])?[a-zA-Z]*)*$/;
                        return re.test(value)
                          ? true
                          : 'Allowed characters: letters (a-z), numbers, underscores, periods, and dashes.';
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.name !== undefined}
                        label="Organization Name"
                        fullWidth
                        name="name"
                        helperText={errors.name !== undefined ? <HelperText text={errors.name.message} /> : null}
                      />
                    )}
                  />
                </Box>
              </Grid>

              <Grid item>
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="position"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Organization Position</b> is required
                        </>
                      ),
                    }}
                    render={({ field }) => (
                      <>
                        <FormControl fullWidth error={errors.position !== undefined}>
                          <InputLabel id="demo-simple-select-label">Organization Position</InputLabel>
                          <Select {...field}>
                            <MenuItem value={10}>Position 1</MenuItem>
                            <MenuItem value={20}>Position 2</MenuItem>
                            <MenuItem value={30}>Position 3</MenuItem>
                          </Select>
                          {errors.position && (
                            <FormHelperText>
                              <HelperText text={errors.position.message} />
                            </FormHelperText>
                          )}
                        </FormControl>
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
                  Don’t have an account? <Link to="/">Create an account</Link>
                </div>
              </Box>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} className={style.featuresBox}>
          <Box p={5}>
            <Box mb={4}>
              <h3 className={style.title}>Great things for your team to find products</h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Lab Groups</b>
                  <span>Create an account to shop millions of products from thousands of trusted suppliers.</span>
                </li>
                <li>
                  <b>Admin Page</b>
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

export default StepOrganization;
