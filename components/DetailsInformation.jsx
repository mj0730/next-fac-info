import React from 'react';
import PropTypes from 'prop-types';

const DetailsInformation = ({ currentFacInfo }) => (
  <section id='fac-information'>
    <div className='flex-row'>
      <div className='fac-information-item address'>
        {currentFacInfo.address}, {currentFacInfo.city}, {currentFacInfo.state} {currentFacInfo.zip}
      </div>
      {/* <div className='fac-information-item'>{currentFacInfo.city}</div>
      <div className='fac-information-item'>{currentFacInfo.state}</div>
      <div className='fac-information-item'>{currentFacInfo.zip}</div> */}
    </div>

    <div className='flex-row'>
      <div className='fac-information-item'>Service Area: {currentFacInfo['Service Area']}</div>
      <div className='fac-information-item'>District: {currentFacInfo['District']}</div>
      <div className='fac-information-item'>Region: {currentFacInfo['HRRegion']}</div>
    </div>

    <div className='flex-row'>
      <div className='fac-information-item'>{currentFacInfo.phone}</div>
      <div className='fac-information-item'>{currentFacInfo.hours}</div>
      <div className='fac-information-item'>Travel Days: {currentFacInfo.travelDays}</div>
    </div>
  </section>
);

export default DetailsInformation;

DetailsInformation.propTypes = {
  currentFacInfo: PropTypes.object.isRequired,
};
