import Head from 'next/head';
import Router from 'next/router';
import { useState, useEffect, useContext, forwardRef} from 'react';
import {FacIdContext} from '../components/FacIdContext';
import {FACILITIES} from '../scripts/facility_info';
import MaterialTable from 'material-table';
import MTable from '../components/MTable';
import MUIDataTable from 'mui-datatables';


/* Icon Imports */
//import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
//import Check from '@material-ui/icons/Check';
//import ChevronLeft from '@material-ui/icons/ChevronLeft';
//import ChevronRight from '@material-ui/icons/ChevronRight';
//import Clear from '@material-ui/icons/Clear';
//import DeleteOutline from '@material-ui/icons/DeleteOutline';
//import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
//import FirstPage from '@material-ui/icons/FirstPage';
//import LastPage from '@material-ui/icons/LastPage';
//import Remove from '@material-ui/icons/Remove';
//import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  //Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  //Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  // FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  // LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  // NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  // ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const Facilites = () => {
  const [FacId, storeFacId] = useContext(FacIdContext);
  const facilityData = Object.values(FACILITIES);

  const columnHeaders = [{title: 'ID', field: 'id'}, {title: 'Name', field: 'name'}, {title: 'Level', field: 'level'}, {title: 'Type', field: 'type'}]

  const options = {sorting: true, filtering: true, header: true, search: false, paging: false, padding: 'dense', toolbar: false, showTitle: true, color: '#FFF', backgroundColor: '#000',
  headerStyle: {backgroundColor: '#01579b', color: '#FFF', fontFamily: 'Garamound', fontWeight: 'bold'},
  rowStyle: { backgroundColor: '#000', color: '#FFF'},
  filterCellStyle: {backgroundColor: '#333', color: '#FFF', paddingTop: 0, paddingBottom: 0},
  actionsCellStyle: {backgroundColor: '#333', color: '#FFF', padding: 0, margin: 0}
}

  const handleRowClick = (e, rowData) => {
    e.preventDefault();
    storeFacId(rowData.id);
    Router.push('/');
  }

  return (
    <div id="container">
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      {/*<MaterialTable
        title='Facility'
        columns={columnHeaders}
        data={facilityData}
        icons={tableIcons}
        options={options}
        onRowClick={handleRowClick}
      />*/}

      <MTable title={"Facility Information"}/>
    </div>
)}

export default Facilites;