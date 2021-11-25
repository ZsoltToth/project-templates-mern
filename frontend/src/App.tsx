import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './component/Greetings';
import Counter from './component/Counter';
import IssueRecordingForm from './component/IssueRecordingForm';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings name={'React'}/>
        <Counter/>
        <IssueRecordingForm/>
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
