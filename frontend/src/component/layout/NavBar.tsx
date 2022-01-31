import React, { FunctionComponent } from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const NavBar: FunctionComponent = () => {
  return (
    <AppBar variant={'outlined'} elevation={0} position={'static'}>
      <Toolbar>
        <Button variant={'outlined'}><Link to={'/'}><Home/></Link></Button>
        <Button variant={'outlined'}><Link to={'/issues'}>Lists</Link></Button>
        <Button variant={'outlined'}><Link to={'/issues/record'}>Create</Link></Button>
        <Button variant={'outlined'}><Link to={'/'}>Counter</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
