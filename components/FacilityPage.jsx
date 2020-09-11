import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import DetailsPay from './DetailsPay';
import DetailsStaffing from './DetailsStaffing';
import DetailsInformation from './DetailsInformation';

const FacilityPage = ({ currentFacPay, currentFacInfo }) => {
  const toTitleCase = (str = '') => {
    if (str === 'ARTCC' || str === 'TRACON') {
      return str;
    } else {
      str = str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

      return str.join(' ');
    }
  };

  return (
    <div id='facility-info' className='fac-page-grid'>
      <Head>
        <title>{`${currentFacInfo['Facility Name']} - pointSixtyFive`}</title>
      </Head>

      <header>
        <div className='flex-col'>
          <h1>{currentFacInfo['Facility ID']}</h1>
          <p>{currentFacInfo['Facility Name']}</p>
        </div>

        <div className='flex-col align-flex-end'>
          <h1>{currentFacInfo.Level !== undefined && `Level ${currentFacInfo.Level}`}</h1>
          <p>{toTitleCase(currentFacInfo['Facility Type'])}</p>
        </div>
      </header>

      {currentFacInfo.Level !== undefined && (
        <main>
          <DetailsInformation currentFacInfo={currentFacInfo} />
          <DetailsPay currentFacPay={currentFacPay} />
          <DetailsStaffing data={currentFacInfo} />
        </main>
      )}
    </div>
  );
};

export default FacilityPage;

FacilityPage.propTypes = {
  currentFacInfo: PropTypes.object.isRequired,
  currentFacPay: PropTypes.object.isRequired,
};
