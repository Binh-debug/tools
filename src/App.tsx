import React from 'react';
import logo from './logo.svg';
import './App.css';
import groupFilter from './page/tool';
import {
  keyword1,
  keyword10,
  keyword11,
  keyword2,
  keyword3,
  keyword4,
  keyword5,
  keyword6,
  keyword7,
  keyword8,
  keyword9,
} from './const/keyword';
import { groupKeywords } from './page/tool/test2';

function App() {
  const keywords = [
    keyword1,
    keyword2,
    keyword3,
    keyword4,
    keyword5,
    keyword6,
    keyword7,
    keyword8,
    keyword9,
    keyword10,
    keyword11,
  ];
  console.log(groupKeywords(keywords));

  // groupFilter(keywords);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
