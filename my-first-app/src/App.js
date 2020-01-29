import React from 'react';
import logo from './logo.svg';
import './App.css';
import {C1,C2}  from './C1/C1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <C1 />
        <C2 country="India" state="WB"/>
        <C2 country="UK" state="London">"Hi! I am in London"</C2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
