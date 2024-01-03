import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four';
import Header from './components/Header';
import FuntuseState from './components/FuntuseState'
import ClassuseState from './components/ClassuseState';
import FunctuseStateCar from './components/FunctuseStateCar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <One /> */}
    {/* <Two /> */}
    {/* <Three /> */}
    {/* <Four /> */}
    {/* <Header /> */}

    {/* <FuntuseState /> */}
    {/* <ClassuseState /> */}
    <FunctuseStateCar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
