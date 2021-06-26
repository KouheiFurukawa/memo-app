import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@material-ui/core';

const InputComponent = (props) => {
  const { state, inputActions } = props;

  return (
    <Grid container spacing={2} style={{ width: '720px' }}>
      <Grid container item spacing={2} xs={12}>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Title"
            value={state.title}
            onChange={(event) => inputActions.changeInput('title', event)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Date"
            value={state.date}
            onChange={(event) => inputActions.changeInput('date', event)}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2} xs={12}>
        <Grid item style={{ width: '100%' }}>
          <TextField
            label="Info"
            multiline
            variant="outlined"
            rows={4}
            style={{ width: '100%' }}
            value={state.info}
            onChange={(event) => inputActions.changeInput('info', event)}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => inputActions.memoAdd()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

InputComponent.propTypes = {
  state: PropTypes.object.isRequired, // eslint-disable-line
  inputActions: PropTypes.object.isRequired, // eslint-disable-line
};

export default InputComponent;
