import React from 'react';
import PropTypes from 'prop-types';

const StandardPayTableCell = ({ basePay, i }) => (
  <td>
    {basePay[i]} {basePay['CIP' + i] > 0 && <span className='cip'>({basePay['CIP' + i]})</span>}
  </td>
);

export default StandardPayTableCell;

StandardPayTableCell.propTypes = {
  basePay: PropTypes.object.isRequired,
  i: PropTypes.string.isRequired,
};
