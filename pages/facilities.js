import Head from 'next/head';
import { useContext } from 'react';
import { FacIdContext } from '../components/FacIdContext';
import { DbInfoContext } from '../components/DbInfoContext';
import { FACILITIES } from '../scripts/facility_info';
import MTable from '../components/MTable';

const Facilites = () => {
  const [FacId, storeFacId] = useContext(FacIdContext);
  const [DbInfo, setDbInfo] = useContext(DbInfoContext);

  const facilityData = Object.values(FACILITIES);
  const staffingData = Object.values(DbInfo);
  console.log(staffingData)

  // const handleRowClick = (e, rowData) => {
  //   e.preventDefault();
  //   storeFacId(rowData.id);
  //   Router.push('/');
  // }

  const columnsFacility = [
    {label: 'ID', name: 'id', options: {filter: false, sort: true, searchable: true,}}, 
    {label: 'Name', name: 'name', options: {filter: false, sort: true, searchable: true,}}, 
    {label: 'Level', name: 'level', options: {filter: true, sort: true, searchable: false,}}, 
    {label: 'Type', name: 'type', options: {filter: true, sort: true, searchable: false,}}
  ];

  const columnsStaffing = [
    {label: 'col1', name: 'Facility ID', options: {filter: true, sort: true, searchable: true,}}
  ];

  return (
    <div id="container">
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <MTable title={"Facility Information"} data={facilityData} columns={columnsFacility}/>
      <MTable title={"Staffing"} data={staffingData} columns={columnsStaffing} />
    </div>
)}

export default Facilites;