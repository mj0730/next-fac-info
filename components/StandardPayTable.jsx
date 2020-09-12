import React from 'react';
import PropTypes from 'prop-types';
import StandardPayTableCell from './StandardPayTableCell';

const StandardPayTable = ({ pay }) => (
  <React.Fragment>
    <tbody>
      <tr>
        <StandardPayTableCell pay={pay} i={'CPCMAX'} />
        {pay['D3'] > 0 ? <StandardPayTableCell pay={pay} i={'CPC'} /> : <td>N/A</td>}
        {pay['D2'] > 0 ? <StandardPayTableCell pay={pay} i={'D3'} /> : <td>N/A</td>}
        {pay['D1'] > 0 ? <StandardPayTableCell pay={pay} i={'D2'} /> : <td>N/A</td>}
        <td rowSpan='2'>
          {pay['AG']} {pay['CIPAG'] > 0 && <span className='cip'>({pay['CIPAG']})</span>}
        </td>
      </tr>
      <tr>
        <StandardPayTableCell pay={pay} i={'CPC'} />
        {pay['D3'] > 0 ? <StandardPayTableCell pay={pay} i={'D3'} /> : <td>N/A</td>}
        {pay['D2'] > 0 ? <StandardPayTableCell pay={pay} i={'D2'} /> : <td>N/A</td>}
        {pay['D1'] > 0 ? <StandardPayTableCell pay={pay} i={'D1'} /> : <td>N/A</td>}
      </tr>
    </tbody>
  </React.Fragment>
);

export default StandardPayTable;

StandardPayTable.propTypes = {
  pay: PropTypes.object.isRequired,
};
