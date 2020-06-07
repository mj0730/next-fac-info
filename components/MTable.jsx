import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {FACILITIES} from '../scripts/facility_info';
import {FacIdContext} from '../components/FacIdContext';
import { useState, useEffect, useContext, forwardRef} from 'react';
import Router from 'next/router';



const MTable = () => {
  const [FacId, storeFacId] = useContext(FacIdContext);

  const facilityData = Object.values(FACILITIES);

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FFF"
        }
      }
    }
  })

  const handleRowClick = (e) => {
    const clickedRowId = e[0];
    storeFacId(clickedRowId);
    Router.push('/');
  }

  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    responsive: 'stacked',
    rowsPerPageOptions: [10, 25, 50],
    rowHover: true,
    fixedHeaderOptions: {xAxis: true, yAxis: true},
    sort: true,
    searchPlaceholder: 'Search...',
    print: true,
    download: true,
    onRowClick: handleRowClick,
  };

  const columns = [
    {label: 'ID', name: 'id', options: {filter: true, sort: false, searchable: true,}}, 
    {label: 'Name', name: 'name', options: {filter: true, sort: false, searchable: true,}}, 
    {Label: 'Level', name: 'level', options: {filter: true, sort: false, searchable: false,}}, 
    {Label: 'Type', name: 'type', options: {filter: true, sort: false, searchable: false,}}
  ]

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={'This is a Title'}
        data={facilityData}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  )
}

export default MTable;