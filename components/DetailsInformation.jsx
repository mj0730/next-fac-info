import React from 'react';
import PropTypes from 'prop-types';

const DetailsInformation = ({currentFacInfo}) => (
  <section id="fac-information">
    <div className="flex-row">    
      <div className="fac-information-item">{currentFacInfo.address}</div>
      <div className="fac-information-item">{currentFacInfo.city}</div>
      <div className="fac-information-item">{currentFacInfo.state}</div>
      <div className="fac-information-item">{currentFacInfo.zip}</div>

    </div>
    
  </section>

)

export default DetailsInformation;

DetailsInformation.propTypes = {
  currentFacInfo: PropTypes.object.isRequired
}