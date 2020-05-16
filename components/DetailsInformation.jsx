import React from 'react';
import PropTypes from 'prop-types';

const DetailsInformation = ({currentFacInfo}) => (
  <section id="fac-Information">

    <p>This is the info section</p>
  </section>

)

export default DetailsInformation;

DetailsInformation.propTypes = {
  currentFacInfo: PropTypes.object.isRequired
}