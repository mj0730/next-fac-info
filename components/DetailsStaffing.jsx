import React from 'react';
import PropTypes from 'prop-types';

const DetailsStaffing = ({data}) => (
  <section id='fac-staffing'>
    <h2>Staffing</h2>
    <p>{data.test.id}</p>

  </section>

)

export default DetailsStaffing;

DetailsStaffing.propTypes = {
  data: PropTypes.object.isRequired
};