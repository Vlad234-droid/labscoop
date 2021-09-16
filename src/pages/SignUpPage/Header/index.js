import React from "react";
import { Link } from "react-router-dom";
import { Stepper, Step, StepLabel } from "@material-ui/core/";

import {
  IconPersonal,
  IconOrganization,
  IconLock,
} from "../../../components/icons";

import headerLogo from "../../../assets/img/header_logo.svg";

import "./style.module.scss";

const Header = ({ step }) => {
  return (
    <header>
      <Link to='/' className='no-decoration'>
        <img src={headerLogo} alt='logo' />
      </Link>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel StepIconComponent={IconPersonal}>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={IconOrganization}>
            Organization
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={IconLock}>Password</StepLabel>
        </Step>
      </Stepper>
      <Link to='/sign-up'>Create an account</Link>
    </header>
  );
};

export default Header;
