import React from 'react';
import './App.css';
import Demo from './pages/Demo';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import FoodRecordingPage from './pages/FoodRecordingPage';
import { AppBar, Button, Divider, Grid, ThemeProvider, Toolbar } from '@material-ui/core';
import { theme } from './theme';

function App () {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container>
          <BrowserRouter>

            <Grid item md={12} lg={12} justifyContent={'center'} direction={'column'}>
                <Toolbar>
                  <Button variant={'contained'}>
                    <Link to={'/demo'}>Demo</Link>
                  </Button>
                  <Button variant={'contained'}>
                    <Link to={'/food'}>Food</Link>
                  </Button>
                </Toolbar>
            </Grid>
            <Grid item md={12} lg={12}>
              <Routes>
                <Route path={'/'} element={<Demo/>}/>
                <Route path={'demo'} element={<Demo/>}/>
                <Route path={'food'} element={<FoodRecordingPage/>}/>
              </Routes>
            </Grid>
          </BrowserRouter>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
