import React from 'react';
import './App.css';
import Demo from './pages/Demo';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import FoodRecordingPage from './pages/FoodRecordingPage';
import { AppBar, Button, Divider, Grid, ThemeProvider, Toolbar } from '@material-ui/core';
import { theme } from './theme';
import FoodListPage from './pages/FoodListPage';

function App () {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container>
          <BrowserRouter>

            <Grid item md={12} lg={12}>
                <Toolbar>
                  <Button variant={'contained'}>
                    <Link to={'/add-food'}>Add Food</Link>
                  </Button>
                  <Button variant={'contained'}>
                    <Link to={'/food'}>Foods</Link>
                  </Button>
                </Toolbar>
            </Grid>
            <Grid item md={12} lg={12}>
              <Routes>
                <Route path={'/'} element={<FoodListPage/>}/>
                <Route path={'add-food'} element={<FoodRecordingPage/>}/>
                <Route path={'food'} element={<FoodListPage/>}/>
              </Routes>
            </Grid>
          </BrowserRouter>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
