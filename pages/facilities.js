import React, { useContext, useState } from 'react';
import Head from 'next/head';
import { DbInfoContext } from '../components/context/DbInfoContext';
import MTable from '../components/MTable';

const Facilites = () => {
  const [DbInfo, setDbInfo, payData] = useContext(DbInfoContext);
  const [tableToDisplay, setTableToDisplay] = useState('information');
  const [activeClass, setActiveClass] = useState('information');

  const facilityData = Object.values(DbInfo);

  const handleClick = (e) => {
    e.target.value === undefined
      ? setTableToDisplay(e.target.firstChild.data.toLowerCase())
      : setTableToDisplay(e.target.value);
    setActiveClass(e.target.value);
  };

  const formatSalary = (value) => {
    if (value === 0) return '-';

    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return nf.format(value);
  };

  const formatPercentage = (value) => {
    const nf = new Intl.NumberFormat('en-us', {
      style: 'percent',
      maximumFractionDigits: 1,
    });

    return nf.format(value);
  };

  const formatPercentageFromWholeNumber = (value) => {
    if (parseInt(value) === 0) return '-';

    value = value / 100;
    const nf = new Intl.NumberFormat('en-us', {
      style: 'percent',
      maximumFractionDigits: 1,
    });

    return nf.format(value);
  };

  const columnsFacility = [
    {
      label: 'ID',
      name: 'Facility ID',
      options: { filter: false, sort: true, sortDirection: 'asc', searchable: true },
    },
    {
      label: 'Name',
      name: 'Facility Name',
      options: { filter: false, sort: true, searchable: true },
    },
    {
      label: 'Level',
      name: 'Level',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'Type',
      name: 'Facility Type',
      options: { filter: true, sort: true, searchable: false },
    },
    // {
    //   label: 'State',
    //   name: 'state',
    //   options: { filter: true, sort: true, searchable: false },
    // },
  ];

  const columnsStaffing = [
    {
      label: 'ID',
      name: 'Facility ID',
      options: {
        filter: true,
        sort: true,
        sortDirection: 'asc',
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
      options: { customBodyRender: formatPercentage, filter: true, sort: true, searchable: true },
    },
    {
      label: 'Trainees',
      name: 'ATCS in Training minus LTH',
      options: { filter: true, sort: true, searchable: true },
    },
    {
      label: 'Trainee To CPC %',
      name: 'Current % CPC to Trainees',
      options: { customBodyRender: formatPercentage, filter: true, sort: true, searchable: true },
    },
    {
      label: 'Training Success Rate',
      name: 'Training Success Rate',
      options: { customBodyRender: formatPercentage, filter: true, sort: true, searchable: true },
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
      options: { customBodyRender: formatPercentage, filter: true, sort: true, searchable: true },
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
      options: { filter: true, sort: true, sortDirection: 'asc', searchable: true },
    },
    {
      label: 'CPC MAX',
      name: 'CPCMAX',
      options: {
        customBodyRender: formatSalary,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'CPC',
      name: 'CPC',
      options: { customBodyRender: formatSalary, filter: false, sort: true, searchable: false },
    },
    {
      label: 'D3',
      name: 'D3',
      options: { customBodyRender: formatSalary, filter: false, sort: true, searchable: false },
    },
    {
      label: 'D2',
      name: 'D2',
      options: { customBodyRender: formatSalary, filter: false, sort: true, searchable: false },
    },
    {
      label: 'D1',
      name: 'D1',
      options: { customBodyRender: formatSalary, filter: false, sort: true, searchable: false },
    },
    {
      label: 'AG',
      name: 'AG',
      options: { customBodyRender: formatSalary, filter: false, sort: true, searchable: false },
    },
    {
      label: 'Locality %',
      name: 'LOC%',
      options: { customBodyRender: formatPercentageFromWholeNumber, filter: true, sort: true, searchable: false },
    },
    {
      label: 'CIP %',
      name: 'CIP%',
      options: { customBodyRender: formatPercentageFromWholeNumber, filter: true, sort: true, searchable: false },
    },
    {
      label: 'COLA %',
      name: 'COLA%',
      options: { customBodyRender: formatPercentageFromWholeNumber, filter: true, sort: true, searchable: false },
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
      {tableToDisplay === 'staffing' && <MTable data={facilityData} columns={columnsStaffing} />}
      {tableToDisplay === 'pay' && <MTable data={payData} columns={columnsPay} />}
    </div>
  );
};

export default Facilites;
