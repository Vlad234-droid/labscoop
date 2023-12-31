import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './core/routes';
import './global.scss';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

store.subscribe(() => {
  console.log(store.getState());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
