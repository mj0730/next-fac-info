import PropTypes from 'prop-types';

const StandardPayTableCell = ({ pay, i, rowspan }) => {
  const formatSalary = (value) => {
    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return nf.format(value);
  };

  return (
    <td rowSpan={rowspan}>
      {formatSalary(pay[i])} {pay['CIP' + i] > 0 && <span className='cip'>({pay['CIP' + i]})</span>}
    </td>
  );
};

export default StandardPayTableCell;

StandardPayTableCell.propTypes = {
  pay: PropTypes.object.isRequired,
  i: PropTypes.string.isRequired,
  rowspan: PropTypes.number,
};
