import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './config'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
