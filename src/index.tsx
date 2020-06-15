import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss'

ReactDOM.render(
  //普通模式
  <App/>,
  //严格模式
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


