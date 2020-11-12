import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from "./ebconfig.json";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <EasybaseProvider ebconfig={ebconfig}>
    <App />
  </EasybaseProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
