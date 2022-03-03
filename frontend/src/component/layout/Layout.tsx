import React, { FunctionComponent } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import IssueTable from '../../pages/IssueTable';
import IssueRecordingForm from '../../pages/IssueRecordingForm';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <NavBar/>
        </Grid>
        <Grid item md={2}>Side Menu</Grid>
        <Grid item md={10}>
          <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/issues'} element={<IssueTable/>}/>
            <Route path={'/issues/record'} element={<IssueRecordingForm/>}/>
          </Routes>
          {children}
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default Layout;