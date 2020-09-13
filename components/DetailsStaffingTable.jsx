import React from 'react';
import PropTypes from 'prop-types';

const DetailsStaffingTable = ({ data, title }) => (
  <>
    <h3>{title}</h3>
    <table id='payscale'>
      <thead className='pay-header'>
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
            <th scope='col' key={i}>
              {item.data}
            </th>
          ))}
        </tr>
      </tbody>
    </table>
  </>
);

export default DetailsStaffingTable;

DetailsStaffingTable.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
