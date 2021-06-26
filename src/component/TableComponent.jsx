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

  const { state } = props;

  return (
    <Grid container spacing={2}>
      <Grid item style={{ height: 400, width: 700 }}>
        <DataGrid rows={state} columns={columns} pageSize={5} />
      </Grid>
    </Grid>
  );
};

TableComponent.propTypes = {
  state: PropTypes.array.isRequired, // eslint-disable-line
};

export default TableComponent;
