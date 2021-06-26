import React from 'react';
import 'date-fns';
import PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const InputComponent = (props) => {
  const { state, actions } = props;

  return (
    <Grid container spacing={2} style={{ width: '720px' }}>
      <Grid container item spacing={2} xs={12}>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Title"
            value={state.title}
            onChange={(event) => actions.changeInput('title', event)}
          />
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item>
            <KeyboardDatePicker
              label="Date"
              value={state.date}
              onChange={(event) => actions.changeInput('date', event)}
            />
          </Grid>
        </MuiPickersUtilsProvider>
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
            onChange={(event) => actions.changeInput('info', event)}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => actions.memoAdd()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

InputComponent.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    changeInput: PropTypes.func,
    memoAdd: PropTypes.func,
  }).isRequired,
};

export default InputComponent;
