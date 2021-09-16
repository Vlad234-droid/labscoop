import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "../../../components/TextField";
import { Grid, Box } from "@material-ui/core/";
import style from "../index.module.scss";

const StepPersonal = ({ nextStep }) => {
  const [phone, setPhone] = useState();

  return (
    <div className='step_slide'>
      <Grid container>
        <Grid item xs={6}>
          <form>
            <Grid container direction='column' wrap='nowrap'>
              <Grid item>
                <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={320}>
                  <TextField
                    error={false}
                    label='First Name'
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
                  <TextField
                    error={false}
                    label='Last Name'
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
                  <TextField
                    error={false}
                    type='phone'
                    label='Phone number'
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
                  <TextField
                    error={false}
                    label='Enter your email'
                    type='email'
                    required
                    fullWidth
                    bottomText='We suggest using the email address you use at work'
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
                Search for a thousands of products in a comfortable way
              </h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Quality Discounts</b>
                  <span>
                    Create an account to shop millions of products from
                    thousands of trusted suppliers.
                  </span>
                </li>
                <li>
                  <b>Easy search</b>
                  <span>
                    Create an account to shop millions of products from
                    thousands of trusted suppliers.
                  </span>
                </li>
                <li>
                  <b>Choose now, pay later</b>
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

export default StepPersonal;
