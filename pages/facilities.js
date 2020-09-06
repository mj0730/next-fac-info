import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
//import { FacIdContext } from '../components/context/FacIdContext';
import { DbInfoContext } from '../components/context/DbInfoContext';
import { FACILITIES } from '../scripts/facility_info.js';
import MTable from '../components/MTable';

const Facilites = () => {
  //const [FacId, storeFacId] = useContext(FacIdContext);
  const [DbInfo, setDbInfo, payData] = useContext(DbInfoContext);
  const [tableToDisplay, setTableToDisplay] = useState('information');
  const [activeClass, setActiveClass] = useState('information');

  const facilityData = Object.values(FACILITIES);
  const staffingData = Object.values(DbInfo);

  // Convert decimals into percentages
  function changeToPercentage(num) {
    return (num * 100).toFixed(1);
  }

  useEffect(() => {
    staffingData.forEach((item) => {
      item['Current % CPC to Target'] = changeToPercentage(item['Current % CPC to Target']);
      item['Current % CPC to Trainees'] = changeToPercentage(item['Current % CPC to Trainees']);
      item['Training Success Rate'] = changeToPercentage(item['Training Success Rate']);
      item['Projected % to Target'] = changeToPercentage(item['Projected % to Target']);
    });
  }, []);

  const handleClick = (e) => {
    e.target.value === undefined
      ? setTableToDisplay(e.target.firstChild.data.toLowerCase())
      : setTableToDisplay(e.target.value);
    setActiveClass(e.target.value);
  };

  const columnsFacility = [
    {
      label: 'ID',
      name: 'id',
      options: { filter: false, sort: true, searchable: true },
    },
    {
      label: 'Name',
      name: 'name',
      options: { filter: false, sort: true, searchable: true },
    },
    {
      label: 'Level',
      name: 'level',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'Type',
      name: 'type',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'State',
      name: 'state',
      options: { filter: true, sort: true, searchable: false },
    },
  ];

  const columnsStaffing = [
    {
      label: 'ID',
      name: 'Facility ID',
      options: {
        filter: true,
        sort: true,
        searchable: true,
        filterType: 'dropdown',
      },
    },
    {
      label: 'CPC',
      name: 'Current # of CPC On-Board minus Temps minus LTH',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'CPC Target',
      name: 'CPC Target',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'CPC To Target %',
      name: 'Current % CPC to Target',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Trainees',
      name: 'ATCS in Training minus LTH',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Trainee To CPC %',
      name: 'Current % CPC to Trainees',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Training Success Rate',
      name: 'Training Success Rate',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Training Time (yrs)',
      name: 'Training Time Years',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'ERR Category',
      name: 'ERR Category',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Projected %',
      name: 'Projected % to Target',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Gains (NatAvg)',
      name: 'Possible Gains to National Average',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Gains (Target)',
      name: 'Possible Gains to Target',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Losses',
      name: 'Possible Losses',
      options: { filter: true, sort: true, searchable: true },
    },
  ];

  const columnsPay = [
    {
      label: 'ID',
      name: 'fac_id',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'CPC MAX',
      name: 'data["PayTable[0]"]',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'CPC',
      name: 'test1',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'D3',
      name: 'test1',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'D2',
      name: 'test1',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'D1',
      name: 'test1',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'AG',
      name: 'test1',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'Locality %',
      name: 'test2',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'CIP %',
      name: 'data[CIP%]',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'COLA %',
      name: 'test2',
      options: { filter: true, sort: true, searchable: false },
    },
  ];

  return (
    <div id='container'>
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <nav id='table-select'>
        <button onClick={handleClick} value={'information'} className={activeClass === 'information' ? 'active' : null}>
          Information
        </button>
        <button onClick={handleClick} value={'staffing'} className={activeClass === 'staffing' ? 'active' : null}>
          Staffing
        </button>
        <button onClick={handleClick} value={'pay'} className={activeClass === 'pay' ? 'active' : null}>
          Pay
        </button>
      </nav>

      {tableToDisplay === 'information' && <MTable data={facilityData} columns={columnsFacility} />}
      {tableToDisplay === 'staffing' && <MTable data={staffingData} columns={columnsStaffing} />}
      {tableToDisplay === 'pay' && <MTable data={payData} columns={columnsPay} />}
    </div>
  );
};

export default Facilites;
