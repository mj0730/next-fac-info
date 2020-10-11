import React from 'react';
import PropTypes from 'prop-types';

const DetailsStaffingTable = ({ data, title }) => (
  <>
    {title === '' ? null : <h3>{title}</h3>}
    <table id='staffing-table'>
      <thead className='staffing-header'>
        <tr>
          {data.map((item, i) => (
            <th scope='col' key={i}>
              {item.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((item, i) => (
            <td scope='col' key={i}>
              {item.data}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </>
);

export default DetailsStaffingTable;

DetailsStaffingTable.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
