import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText } from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm, Controller } from 'react-hook-form';
import { HelperText } from '../../../components/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import style from '../index.module.scss';
import { useSelector } from 'react-redux';

const StepOrganization = ({ nextStep, setValuesToSignUp, valuesToSignUp }) => {
  const countries = useSelector((state) => state.data.countries);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const prev = {
      ...valuesToSignUp,
      country: data.country.code,
    };
    prev.organization = {};
    for (let item in data) {
      if (item !== 'country') prev.organization[item] = data[item];
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
                    name="country"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Organization Structure</b> is required
                        </>
                      ),
                    }}
                    render={({ field }) => (
                      <>
                        <Autocomplete
                          id="combo-box-demo"
                          options={countries}
                          getOptionLabel={(option) => option.name}
                          fullWidth
                          onChange={(e, value) => {
                            return field.onChange(value);
                          }}
                          renderInput={(params) => {
                            return (
                              <TextField
                                {...params}
                                error={errors.country !== undefined}
                                label="Countries"
                                fullWidth
                                name="name"
                                helperText={
                                  errors.country !== undefined ? <HelperText text={errors.country.message} /> : null
                                }
                              />
                            );
                          }}
                        />
                        {/* <FormControl fullWidth error={errors.type !== undefined}>
                          <InputLabel id="demo-simple-select-label">Country</InputLabel>
                          <Select {...field}>
                            {countries.length &&
                              countries.map((item) => <MenuItem value={'C-Corporation'}>C-Corporation</MenuItem>)}
                          </Select>
                          {errors.structure && (
                            <FormHelperText>
                              <HelperText text={errors.structure.message} />
                            </FormHelperText>
                          )}
                        </FormControl> */}
                      </>
                    )}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box mb={2} ml={'auto'} mr={'auto'} maxWidth={320}>
                  <Controller
                    name="structure"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: (
                        <>
                          <b>Organization Structure</b> is required
                        </>
                      ),
                    }}
                    render={({ field }) => (
                      <>
                        <FormControl fullWidth error={errors.structure !== undefined}>
                          <InputLabel id="demo-simple-select-label">Organization Structure</InputLabel>
                          <Select
                            {...field}
                            // labelId='demo-simple-select-label'
                            // id='demo-simple-select'
                            // value={age}
                            // onChange={handleChange}
                          >
                            <MenuItem value={'C-Corporation'}>C-Corporation</MenuItem>
                            <MenuItem value={'S-Corporation'}>S-Corporation</MenuItem>
                            <MenuItem value={'Non-Profit Organization 501(c)(3)'}>
                              Non-Profit Organization 501(c)(3)
                            </MenuItem>
                            <MenuItem value={'Limited Liability Company (LLC)'}>
                              Limited Liability Company (LLC)
                            </MenuItem>
                            <MenuItem value={'State Government Organization'}>State Government Organization</MenuItem>
                            <MenuItem value={'Federal Government Organization'}>
                              Federal Government Organization
                            </MenuItem>
                            <MenuItem value={'Partnership'}>Partnership</MenuItem>
                            <MenuItem value={'Sole Proprietorship'}>Sole Proprietorship</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                          </Select>
                          {errors.structure && (
                            <FormHelperText>
                              <HelperText text={errors.structure.message} />
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
                            <MenuItem value={'University'}>University</MenuItem>
                            <MenuItem value={'Government'}>Government</MenuItem>
                            <MenuItem value={'Biotech'}>Biotech</MenuItem>
                            <MenuItem value={'Private Research'}>Private Research</MenuItem>
                            <MenuItem value={'Hospital/Medical School'}>Hospital/Medical School</MenuItem>
                            <MenuItem value={'Contract Research Organization (CRO)'}>
                              Contract Research Organization (CRO)
                            </MenuItem>
                            <MenuItem value={'Pharmaceutical'}>Pharmaceutical</MenuItem>
                            <MenuItem value={'Diagnostics'}>Diagnostics</MenuItem>
                            <MenuItem value={'Aerospace'}>Aerospace</MenuItem>
                            <MenuItem value={'Cosmetics'}>Cosmetics</MenuItem>
                            <MenuItem value={'Energy'}>Energy</MenuItem>
                            <MenuItem value={'Agriculture'}>Agriculture</MenuItem>
                            <MenuItem value={'Industrial Chemicals'}>Industrial Chemicals</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
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
                      // validate: (value) => {
                      //   const re = /^[a-zA-Z]+(([',. _-])?[a-zA-Z]*)*$/;
                      //   return re.test(value)
                      //     ? true
                      //     : 'Allowed characters: letters (a-z), numbers, underscores, periods, and dashes.';
                      // },
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
                            <MenuItem value={'Principal Investigator'}>Principal Investigator</MenuItem>
                            <MenuItem value={'Lab Manager/Director'}>Lab Manager/Director</MenuItem>
                            <MenuItem value={'Department Administrator'}>Department Administrator</MenuItem>
                            <MenuItem value={'Buyer/Purchasing Agent'}>Buyer/Purchasing Agent</MenuItem>
                            <MenuItem value={'Technician'}>Technician</MenuItem>
                            <MenuItem value={'Postdoctoral Fellow'}>Postdoctoral Fellow</MenuItem>
                            <MenuItem value={'Graduate Student'}>Graduate Student</MenuItem>
                            <MenuItem value={'Procurement Administrator'}>Procurement Administrator</MenuItem>
                            <MenuItem value={'Financial Administrator'}>Financial Administrator</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
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
                  <Button variant="contained" size="large" color="primary" fullWidth type="submit">
                    Next
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
