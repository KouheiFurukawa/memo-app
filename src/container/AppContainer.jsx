import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Table from '../component/TableComponent';
import Inputs from '../component/InputComponent';

const AppContainer = () => (
  <div>
    Hello
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" color="secondary">Delete</Button>
      </Grid>
    </Grid>
    <Table />
    <Inputs />
  </div>
);

export default AppContainer;
