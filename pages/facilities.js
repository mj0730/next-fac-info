import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connectToDatabase } from '../utils/mongodb';
import MTable from '../components/MTable';

//Get facility info from the database. there will be no data available if user doesn't got to index page first without this call to get static props here
export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const result = await db.collection('pptdata').find().project({ _id: 0, createdAt: 0, updatedAt: 0 }).toArray();

  const data = {};
  result.forEach((x) => (data[x['Facility ID']] = x));
  delete data['Updated'];

  const payResult = await db.collection('pay').find().project({ _id: 0, createdAt: 0, updatedAt: 0 }).toArray();

  const payScaleData = {};
  payResult.forEach((x) => {
    payScaleData[x['fac_id']] = x;
  });

  const payTables = Object.values(payScaleData);

  const infoResult = await db
    .collection('facilitydata')
    .find()
    .project({ _id: 0, createdAt: 0, updatedAt: 0 })
    .toArray();
  const infoData = {};
  infoResult.forEach((x) => (infoData[x['facId']] = x));

  for (let key in data) {
    Object.assign(data[key], infoData[key]);
    delete data[key]['facId'];
  }

  return {
    props: { data, payTables },
    revalidate: 86400,
  };
}

const Facilities = ({ data, payTables }) => {
  const [tableToDisplay, setTableToDisplay] = useState('information');
  const [activeClass, setActiveClass] = useState('information');

  const facilityData = Object.values(data);
  const facilityStaffingData = Object.values(data);

  //removes the National Data from facility information table
  {
    let index = facilityData.findIndex((item) => item['Facility ID'] == 'National');
    facilityData.splice(index, 1);
  }

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
    if (typeof value === 'string') {
      value = Number.parseFloat(value) / 100;
    }

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

  const formatLocality = (value) => {
    value = parseFloat(value / 100);
    const nf = new Intl.NumberFormat('en-us', {
      style: 'percent',
      maximumFractionDigits: 2,
    });

    return nf.format(value);
  };

  const formatCategory = (value) => {
    if (!value) {
      return '-';
    }
    let result = value.split(' ');

    return result[0] === 'None' ? 'None' : result[1];
  };

  const formatNumber = (value) => {
    const nf = new Intl.NumberFormat('en-us', {
      style: 'decimal',
      maximumFractionDigits: 2,
    });

    return nf.format(value);
  };

  const sortNumbers = (order) => ({ data: val1 }, { data: val2 }) =>
    (parseFloat(val1) - parseFloat(val2)) * (order === 'asc' ? 1 : -1);

  const columnsFacility = [
    {
      label: 'ID',
      name: 'Facility ID',
      options: {
        filter: false,
        sort: true,
        searchable: true,
      },
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
    {
      label: 'State',
      name: 'state',
      options: { filter: true, sort: true, searchable: false },
    },
    {
      label: 'Region',
      name: 'HRRegion',
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
      options: { filter: false, sort: true, searchable: false },
    },
    {
      label: 'CPC Target',
      name: 'CPC Target',
      options: { filter: false, sort: true, searchable: false },
    },
    {
      label: 'CPC To Target %',
      name: 'Current % CPC to Target',
      options: {
        customBodyRender: formatPercentage,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'Trainees',
      name: 'ATCS in Training minus LTH',
      options: { filter: false, sort: true, searchable: false },
    },
    {
      label: 'Trainee To CPC %',
      name: 'Current % CPC to Trainees',
      options: {
        customBodyRender: formatPercentage,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'Training Success %',
      name: 'Training Success Rate',
      options: {
        customBodyRender: formatPercentage,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'Training Time (yrs)',
      name: 'Training Time Years',
      options: { customBodyRender: formatNumber, filter: false, sort: true, searchable: true },
    },
    {
      label: 'ERR Category',
      name: 'ERR Category',
      options: { customBodyRender: formatCategory, filter: true, sort: true, searchable: true },
    },
    {
      label: 'Projected %',
      name: 'Projected % to Target',
      options: {
        customBodyRender: formatPercentage,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'Gains (NatAvg)',
      name: 'Possible Gains to National Average',
      options: { filter: false, sort: true, searchable: false },
    },
    {
      label: 'Gains (Target)',
      name: 'Possible Gains to Target',
      options: { filter: false, sort: true, searchable: false },
    },
    {
      label: 'Losses',
      name: 'Possible Losses',
      options: { filter: false, sort: true, searchable: false },
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
      options: { customBodyRender: formatLocality, filter: false, sort: true, searchable: false },
    },
    {
      label: 'CIP %',
      name: 'CIP%',
      options: {
        customBodyRender: formatPercentageFromWholeNumber,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      label: 'COLA %',
      name: 'COLA%',
      options: {
        customBodyRender: formatPercentageFromWholeNumber,
        sortCompare: sortNumbers,
        filter: false,
        sort: true,
        searchable: false,
      },
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

      {tableToDisplay === 'information' && (
        <MTable
          data={facilityData}
          columns={columnsFacility}
          defaultSortColumn={{ name: 'Facility ID', direction: 'asc' }}
        />
      )}
      {tableToDisplay === 'staffing' && (
        <MTable
          data={facilityStaffingData}
          columns={columnsStaffing}
          defaultSortColumn={{ name: 'Facility ID', direction: 'asc' }}
        />
      )}
      {tableToDisplay === 'pay' && (
        <MTable data={payTables} columns={columnsPay} defaultSortColumn={{ name: 'fac_id', direction: 'asc' }} />
      )}
    </div>
  );
};

export default Facilities;

Facilities.propTypes = {
  data: PropTypes.object.isRequired,
  payTables: PropTypes.array.isRequired,
};
