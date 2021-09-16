import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
} from "@material-ui/core/";
import TextField from "../../components/TextField";

import headerLogo from "../../assets/img/header_logo.svg";

import style from "./index.module.scss";

function SignInVerificationPage() {
  return (
    <div className='page__sign-in'>
      <header>
        <Link to='/'>
          <img src={headerLogo} alt='logo' />
        </Link>
        <Link to='/sign-up'>Create an account</Link>
      </header>
      <div className='wrapper'>
        <div className={style["form-wrapper"]}>
          <div className={style.form}>
            <form>
              <Grid container direction='column' wrap='nowrap'>
                <Grid item>
                  <h3>We’ve sent you a verification code on your email</h3>
                </Grid>
                <Grid item>
                  <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={256}>
                    <TextField
                      error={false}
                      label='Enter the code'
                      fullWidth
                      // defaultValue='Hello World'
                      // helperText={
                      //   <>
                      //     <b>Full Name</b> is required to add <br /> shipping
                      //     address
                      //   </>
                      // }
                    />
                    <div className={style.forgot}>
                      Didn’t receive the code? <Link to='/'>Send again</Link>
                    </div>
                  </Box>
                </Grid>

                <Box mt={"auto"} ml={"auto"} mr={"auto"} maxWidth={256}>
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name='checkedA' color='primary' />}
                    label='Keep me signed in on this computer'
                  />
                  <Box mt={2}>
                    <Button variant='contained' color='primary' fullWidth>
                      Sign In
                    </Button>
                  </Box>
                  <div className={style.create}>
                    Don’t have an account? <Link to='/'>Create an account</Link>
                  </div>
                </Box>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInVerificationPage;
