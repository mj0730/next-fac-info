import Head from 'next/head';
import { useContext } from 'react';
import { FacIdContext } from '../components/FacIdContext';
import { FACILITIES } from '../scripts/facility_info';
import MTable from '../components/MTable';

const Facilites = () => {
  const [FacId, storeFacId] = useContext(FacIdContext);
  const facilityData = Object.values(FACILITIES);

  // const handleRowClick = (e, rowData) => {
  //   e.preventDefault();
  //   storeFacId(rowData.id);
  //   Router.push('/');
  // }

  const columnsFacInfo = [
    {label: 'ID', name: 'id', options: {filter: false, sort: true, searchable: true,}}, 
    {label: 'Name', name: 'name', options: {filter: false, sort: true, searchable: true,}}, 
    {label: 'Level', name: 'level', options: {filter: true, sort: true, searchable: false,}}, 
    {label: 'Type', name: 'type', options: {filter: true, sort: true, searchable: false,}}
  ];

  return (
    <div id="container">
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <MTable title={"Facility Information"} data={facilityData} columns={columnsFacInfo}/>
    </div>
)}

export default Facilites;