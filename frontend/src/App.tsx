import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './component/Greetings';
import Counter from './component/Counter';
import IssueRecordingForm from './pages/IssueRecordingForm';
import IssueTable from './pages/IssueTable';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Layout from './component/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App () {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout/>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
