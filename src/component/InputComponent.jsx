import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const InputComponent = () => (
  <Grid container spacing={2} style={{ width: '720px' }}>
    <Grid container item spacing={2} xs={12}>
      <Grid item>
        <TextField id="standard-basic" label="Title" />
      </Grid>
      <Grid item>
        <TextField label="Date" />
      </Grid>
    </Grid>
    <Grid container item spacing={2} xs={12}>
      <Grid item style={{ width: '100%' }}>
        <TextField label="Info" multiline variant="outlined" rows={4} style={{ width: '100%' }} />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item>
        <Button variant="contained" color="primary">Add</Button>
      </Grid>
    </Grid>
  </Grid>
);

export default InputComponent;
