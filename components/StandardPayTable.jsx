import React from 'react';
import PropTypes from 'prop-types';
import StandardPayTableCell from './StandardPayTableCell';

const StandardPayTable = ({ basePay }) => (
  <React.Fragment>
    <tbody>
      <tr>
        <StandardPayTableCell basePay={basePay} i={'CPCMAX'} />
        {basePay['D3'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D3'} /> : <td>N/A</td>}
        {basePay['D2'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D2'} /> : <td>N/A</td>}
        {basePay['D1'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D1'} /> : <td>N/A</td>}
        <td rowSpan='2'>
          {basePay['AG']} {basePay['CIPAG'] > 0 && <span className='cip'>({basePay['CIPAG']})</span>}
        </td>
      </tr>
      <tr>
        <StandardPayTableCell basePay={basePay} i={'CPC'} />
        {basePay['D3'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D3'} /> : <td>N/A</td>}
        {basePay['D2'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D2'} /> : <td>N/A</td>}
        {basePay['D1'] > 0 ? <StandardPayTableCell basePay={basePay} i={'D1'} /> : <td>N/A</td>}
      </tr>
    </tbody>
  </React.Fragment>
);

export default StandardPayTable;

StandardPayTable.propTypes = {
  basePay: PropTypes.object.isRequired,
};
