import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "../../../components/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core/";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import style from "../index.module.scss";

const StepOrganization = ({ nextStep }) => {
  const [phone, setPhone] = useState();

  return (
    <div className='step_slide'>
      <Grid container>
        <Grid item xs={6}>
          <form>
            <Grid container direction='column' wrap='nowrap'>
              <Grid item>
                <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={320}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      Organization Type
                    </InputLabel>
                    <Select
                      defaultValue=''
                      // labelId='demo-simple-select-label'
                      // id='demo-simple-select'
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Type 1</MenuItem>
                      <MenuItem value={20}>Type 2</MenuItem>
                      <MenuItem value={30}>Type 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item>
                <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={320}>
                  <TextField
                    error={false}
                    label='Organization Name'
                    required
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
                <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={320}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      Position
                    </InputLabel>
                    <Select
                      defaultValue=''
                      // labelId='demo-simple-select-label'
                      // id='demo-simple-select'
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Position 1</MenuItem>
                      <MenuItem value={20}>Position 2</MenuItem>
                      <MenuItem value={30}>Position 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Box mt={"auto"} ml={"auto"} mr={"auto"} maxWidth={320}>
                <Box mt={2}>
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                </Box>
                <div className={style.create}>
                  Don’t have an account? <Link to='/'>Create an account</Link>
                </div>
              </Box>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} className={style.featuresBox}>
          <Box p={5}>
            <Box mb={4}>
              <h3 className={style.title}>
                Great things for your team to find products
              </h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Lab Groups</b>
                  <span>
                    Create an account to shop millions of products from
                    thousands of trusted suppliers.
                  </span>
                </li>
                <li>
                  <b>Admin Page</b>
                  <span>
                    Create an account to shop millions of products from
                    thousands of trusted suppliers.
                  </span>
                </li>
                <li>
                  <b>Something else</b>
                  <span>
                    Create an account to shop millions of products from
                    thousands of trusted suppliers.
                  </span>
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
