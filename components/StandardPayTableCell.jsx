import React from 'react';
import PropTypes from 'prop-types';

const StandardPayTableCell = ({ basePay, cip, i }) => (
  <td>
    {basePay[i]} {cip[i] > 0 && <span className='cip'>({cip[i]})</span>}
  </td>
);

export default StandardPayTableCell;

StandardPayTableCell.propTypes = {
  basePay: PropTypes.array.isRequired,
  cip: PropTypes.array,
  i: PropTypes.number.isRequired,
};
