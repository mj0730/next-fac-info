import React from 'react';
import PropTypes from 'prop-types';

const DifferentialPayTable = ({ pay }) => {
  const formatSalary = (value) => {
    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return nf.format(value);
  };

  const combinePay = (level) => {
    return pay[level] + pay['DIF' + level];
  };

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>
            {formatSalary(combinePay('CPCMAX'))}
            {pay['CIPCPCMAX'] > 0 && <span className='cip'>({pay['CIPCPCMAX']})</span>}
          </td>
          {combinePay('D3') > 0 ? (
            <td>
              {formatSalary(combinePay('CPC'))} {pay['CIPCPC'] > 0 && <span className='cip'>({pay['CIPCPC']})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinePay('D2') > 0 ? (
            <td>
              {formatSalary(combinePay('D3'))} {pay['CIPD3'] > 0 && <span className='cip'>({pay['CIPD3']})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinePay('D1') > 0 ? (
            <td>
              {formatSalary(combinePay('D2'))} {pay['CIPD2'] > 0 && <span className='cip'>({pay['CIPD2']})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          <td rowSpan='2'>
            {formatSalary(combinePay('AG'))} {pay['CIPAG'] > 0 && <span className='cip'>({pay['CIPAG']})</span>}
          </td>
        </tr>
        <tr>
          <td>
            {formatSalary(combinePay('CPC'))} {pay['CIPCPC'] > 0 && <span className='cip'>({pay['CIPCPC']})</span>}
          </td>
          {combinePay('D3') > 0 ? (
            <td>
              {formatSalary(combinePay('D3'))} {pay['CIPD3'] > 0 && <span className='cip'>({pay['CIPD3']})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinePay('D2') > 0 ? (
            <td>
              {formatSalary(combinePay('D2'))} {pay['CIPD2'] > 0 && <span className='cip'>({pay['CIPD2']})</span>}
            </td>
          ) : (
            <td>N/A</td>
          )}
          {combinePay('D1') > 0 ? (
            <td>
              {formatSalary(combinePay('D1'))} {pay['CIPD1'] > 0 && <span className='cip'>({pay['CIPD1']})</span>}
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
  pay: PropTypes.object.isRequired,
};
