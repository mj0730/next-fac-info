import React from 'react';
import PropTypes from 'prop-types';

const StandardPayTableCell = ({ pay, i }) => (
  <td>
    {pay[i]} {pay['CIP' + i] > 0 && <span className='cip'>({pay['CIP' + i]})</span>}
  </td>
);

export default StandardPayTableCell;

StandardPayTableCell.propTypes = {
  pay: PropTypes.object.isRequired,
  i: PropTypes.string.isRequired,
};
