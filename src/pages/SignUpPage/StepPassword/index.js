import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "../../../components/TextField";
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
} from "@material-ui/core/";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import style from "../index.module.scss";

const StepPassword = ({ nextStep }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='step_slide'>
      <Grid container>
        <Grid item xs={6}>
          <form>
            <Grid container direction='column' wrap='nowrap'>
              <Grid item>
                <Box mb={2} ml={"auto"} mr={"auto"} maxWidth={320}>
                  <FormControl fullWidth className={style.password}>
                    <InputLabel htmlFor='standard-adornment-password'>
                      Create Password
                    </InputLabel>
                    <Input
                      id='standard-adornment-password'
                      type={showPassword ? "text" : "password"}
                      // value={value}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Box maxWidth={320} ml='auto' mr='auto' mb={3} mt={3}>
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name='checkedA' color='primary' />}
                    label={`It's ok to send me occasional emails about Labscoop promotions and news updates`}
                  />
                </Box>
                <Box maxWidth={320} ml='auto' mr='auto'>
                  <FormControlLabel
                    className={style.keep}
                    control={<Checkbox name='checkedA' color='primary' />}
                    label={`It's ok to send me Text/SMS updates about my account`}
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
                Secure shopping experience for you
              </h3>
            </Box>
            <Box mb={4}>
              <ul className={style.featuresList}>
                <li>
                  <b>Safe transactions</b>
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

export default StepPassword;
