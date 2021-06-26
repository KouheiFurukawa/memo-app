import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../style/table.css';

const TableComponent = (props) => {
  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'info', headerName: 'Info', width: 300 },
  ];

  const { state, actions } = props;

  return (
    <Grid container spacing={2}>
      <Grid item style={{ height: 400, width: 700 }}>
        <DataGrid
          rows={state}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionModelChange={(params) => actions.changeSelected(params.selectionModel)}
        />
      </Grid>
    </Grid>
  );
};

TableComponent.propTypes = {
  state: PropTypes.arrayOf(PropTypes.number).isRequired,
  actions: PropTypes.shape({
    changeSelected: PropTypes.func,
  }).isRequired,
};

export default TableComponent;
