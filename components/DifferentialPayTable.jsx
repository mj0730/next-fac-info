import React from 'react';
import PropTypes from 'prop-types';

const DifferentialPayTable = ({ basePay, differential, cip }) => {
  const combinedPay = basePay.map((x, i) => x + differential[i]);

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>
            {combinedPay[0]} {cip[0] > 0 && <span className='cip'>({cip[0]})</span>}
          </td>
          {combinedPay[2] > 0 ? (
            <td>
              {combinedPay[1]} {cip[1] > 0 && <span className='cip'>({cip[1]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinedPay[3] > 0 ? (
            <td>
              {combinedPay[2]} {cip[2] > 0 && <span className='cip'>({cip[2]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinedPay[4] > 0 ? (
            <td>
              {combinedPay[3]} {cip[3] > 0 && <span className='cip'>({cip[3]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          <td rowSpan='2'>
            {combinedPay[5]} {cip[5] > 0 && <span className='cip'>({cip[5]})</span>}
          </td>
        </tr>
        <tr>
          <td>
            {combinedPay[1]} {cip[1] > 0 && <span className='cip'>({cip[1]})</span>}
          </td>
          {combinedPay[2] > 0 ? (
            <td>
              {combinedPay[2]} {cip[2] > 0 && <span className='cip'>({cip[2]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinedPay[3] > 0 ? (
            <td>
              {combinedPay[3]} {cip[3] > 0 && <span className='cip'>({cip[3]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinedPay[4] > 0 ? (
            <td>
              {combinedPay[4]} {cip[4] > 0 && <span className='cip'>({cip[4]})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
        </tr>
      </tbody>
    </React.Fragment>
  );
};
export default DifferentialPayTable;

DifferentialPayTable.propTypes = {
  basePay: PropTypes.array.isRequired,
  cip: PropTypes.array.isRequired,
  differential: PropTypes.array.isRequired,
};
