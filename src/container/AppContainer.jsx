/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import Table from '../component/TableComponent';
import Inputs from '../component/InputComponent';
import Actions from '../../redux/actions';

const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
};

const AppContainer = (props) => {
  const inputActions = useActions(Actions);
  const inputState = useSelector((state) => state.reducer.input);
  const tableState = useSelector((state) => state.reducer.memo);
  const selectedState = useSelector((state) => state.reducer.checked);

  const inputProps = { state: inputState, inputActions, ...props };
  const tableProps = { state: tableState, actions: inputActions, ...props };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => inputActions.memoDelete()}
            disabled={selectedState.length === 0}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <Table {...tableProps} />
      <Inputs {...inputProps} />
    </div>
  );
};

export default AppContainer;
