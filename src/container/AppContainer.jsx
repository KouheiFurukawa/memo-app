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

const AppContainer = () => {
  const actions = useActions(Actions);
  const inputState = useSelector((state) => state.reducer.input);
  const tableState = useSelector((state) => state.reducer.memo);
  const checkState = useSelector((state) => state.reducer.checked);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => actions.memoDelete()}
            disabled={checkState.length === 0}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <Table state={tableState} actions={actions} />
      <Inputs state={inputState} actions={actions} />
    </div>
  );
};

export default AppContainer;
