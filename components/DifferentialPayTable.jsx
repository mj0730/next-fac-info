import React from 'react';
import PropTypes from 'prop-types';

const DifferentialPayTable = ({ basePay, differential }) => {
  const combinedPay = basePay.map((x, i) => x + differential[i]);

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{combinedPay[0]}</td>
          {combinedPay[2] > 0 ? <td>{combinedPay[1]}</td> : <td>N/A</td>}
          {combinedPay[3] > 0 ? <td>{combinedPay[2]}</td> : <td>N/A</td>}
          {combinedPay[4] > 0 ? <td>{combinedPay[3]}</td> : <td>N/A</td>}
          <td rowSpan='2'>{combinedPay[5]}</td>
        </tr>
        <tr>
          <td>{combinedPay[1]}</td>
          {combinedPay[2] > 0 ? <td>{combinedPay[2]}</td> : <td>N/A</td>}
          {combinedPay[3] > 0 ? <td>{combinedPay[3]}</td> : <td>N/A</td>}
          {combinedPay[4] > 0 ? <td>{combinedPay[4]}</td> : <td>N/A</td>}
        </tr>
      </tbody>
    </React.Fragment>
  );
};
export default DifferentialPayTable;

DifferentialPayTable.propTypes = {
  basePay: PropTypes.object.isRequired,
  differential: PropTypes.object.isRequired,
};
