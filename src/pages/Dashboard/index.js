import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/img/header_logo.svg';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { actions } from '../../core/services/authorization';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actions, dispatch);
  return (
    <div className={style.page__dash}>
      <header>
        <Link to="/login" className="no-decoration">
          <img src={headerLogo} alt="logo" />
        </Link>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<ExitToAppIcon />}
          onClick={() => {
            logout();
          }}>
          Logout
        </Button>
      </header>
      <div className={style.container}>
        <h2>Welcome to Labscoop!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
