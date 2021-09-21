import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/img/header_logo.svg';

const Dashboard = () => {
  return (
    <div className={style.page__dash}>
      <header>
        <Link to="/login" className="no-decoration">
          <img src={headerLogo} alt="logo" />
        </Link>
      </header>
      <div className={style.container}>
        <h2>Welcome to Labscoop!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
