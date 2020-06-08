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
    {label: 'ID', name: 'Facility ID', options: {filter: true, sort: true, searchable: true,}},
    {label: 'CPC', name: 'Current # of CPC On-Board minus Temps minus LTH', options: {filter: true, sort: true, searchable: true,}},
    {label: 'CPC Target', name: 'CPC Target', options: {filter: true, sort: true, searchable: true,}},
    {label: 'CPC To Target%', name: 'Current % CPC to Target', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Trainees', name: 'ATCS in Training minus LTH', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Trainee To CPC%', name: 'Current % CPC to Trainees', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Training Success Rate', name: 'Training Success Rate', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Training Time (yrs)', name: 'Training Time Years', options: {filter: true, sort: true, searchable: true,}},
    {label: 'ERR Category', name: 'ERR Category', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Projected %', name: 'Projected % to Target', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Gains (NatAvg)', name: 'Possible Gains to National Average', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Gains (Target)', name: 'Possible Gains to Target', options: {filter: true, sort: true, searchable: true,}},
    {label: 'Losses', name: 'Possible Losses', options: {filter: true, sort: true, searchable: true,}},
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