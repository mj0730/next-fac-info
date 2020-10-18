import PropTypes from 'prop-types';
import StandardPayTable from './StandardPayTable';
import DifferentialPayTable from './DifferentialPayTable';

const DetailsPay = ({ currentFacPay }) => {
  const formatPercentage = (value, type) => {
    if (type === 'dif') {
      value = parseFloat(value);
    } else {
      value = parseFloat(value / 100);
    }

    const nf = new Intl.NumberFormat('en-us', {
      style: 'percent',
      maximumFractionDigits: 2,
    });

    return nf.format(value);
  };

  return (
    <section id='fac-pay'>
      <h2>Pay Table</h2>
      <table id='payscale'>
        <thead className='pay-header'>
          <tr>
            <th scope='col'>CPC</th>
            <th scope='col'>D3</th>
            <th scope='col'>D2</th>
            <th scope='col'>D1</th>
            <th scope='col'>AG</th>
          </tr>
        </thead>
        {!currentFacPay.differentialType ? (
          <StandardPayTable pay={currentFacPay} />
        ) : (
          <DifferentialPayTable pay={currentFacPay} />
        )}
      </table>

      <h2>Pay Factors</h2>
      <ul className='flex-list pay-factors'>
        <li>Locality</li>
        <li>{currentFacPay['locArea']}</li>
        <li>{formatPercentage(currentFacPay['LOC%'], 'loc')}</li>
      </ul>

      {currentFacPay.differentialType && (
        <ul className='flex-list pay-factors'>
          <li>Differential</li>
          <li>{currentFacPay['differentialType']}</li>
          <li>{formatPercentage(currentFacPay['differentialPercentage'], 'dif')}</li>
        </ul>
      )}

      {currentFacPay['CIP%'] > 0 && (
        <ul className='flex-list pay-factors'>
          <li>CIP</li>
          <li>{formatPercentage(currentFacPay['CIP%'], 'cip')}</li>
        </ul>
      )}

      {currentFacPay['COLA%'] > 0 && (
        <ul className='flex-list pay-factors'>
          <li>COLA</li>
          <li>{formatPercentage(currentFacPay['COLA%'], 'cola')}</li>
        </ul>
      )}
    </section>
  );
};

export default DetailsPay;

DetailsPay.propTypes = {
  currentFacPay: PropTypes.object.isRequired,
};
