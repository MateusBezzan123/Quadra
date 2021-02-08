import React from 'react';

import './App.css';

import logo from './assets/1585760761233.jfif';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="GoatMe" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
