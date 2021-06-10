import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';
import '../style/table.css';

const TableComponent = () => {
  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'info', headerName: 'Info', width: 300 },
  ];
  const data = [
    {
      id: 0,
      title: '課題',
      date: '2021-01-01',
      info: 'テストテスト',
    },
    {
      id: 1,
      title: '課題2',
      date: '2021-02-01',
      info: 'testtest',
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item style={{ height: 400, width: 700 }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </Grid>
    </Grid>
  );
};

export default TableComponent;
