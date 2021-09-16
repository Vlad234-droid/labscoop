import React, { useState } from 'react';
import { Tooltip, FormControl, IconButton, InputAdornment, InputLabel, TextField, Input } from '@material-ui/core/';
import { Visibility, VisibilityOff } from '@material-ui/icons/';
import InputMask from 'react-input-mask';

import { IconError } from '../icons';

import styles from './index.module.scss';

const DefoultTextField = ({
  error,
  id,
  label,
  type,
  fullWidth,
  defaultValue,
  helperText,
  value,
  required,
  bottomText,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (type === 'password') {
    return (
      <FormControl fullWidth={fullWidth} className={styles.password}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          name={name}
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
      </FormControl>
    );
  }

  if (type === 'phone') {
    return (
      <InputMask mask="+9(999) 999 99 99" maskChar=" ">
        {() => <TextField label={label} fullWidth={fullWidth} name={name} />}
      </InputMask>
    );
  }

  return (
    <>
      <TextField
        className={styles.textField}
        error={error}
        id={id}
        name={name}
        type={type || 'text'}
        label={label}
        fullWidth={fullWidth}
        required={required}
        defaultValue={defaultValue}
        helperText={helperText ? <HelperText helperText={helperText} /> : false}
      />
      {bottomText && <div className={styles.bottomText}>{bottomText}</div>}
    </>
  );
};

const HelperText = ({ helperText }) => {
  return (
    <>
      <Tooltip title={helperText} placement="top" arrow interactive>
        <span>
          <IconError />
        </span>
      </Tooltip>
    </>
  );
};

export default DefoultTextField;
