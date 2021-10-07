import { LocalizationProvider } from '@mui/lab';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
