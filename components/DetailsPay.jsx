import React from 'react';
import PropTypes from 'prop-types';

const DetailsPay = ({ currentFacPay, currentFacLocality }) => {
  const pay = currentFacPay;

  const changeToPercentage = (num) => {
    return (num * 100).toFixed(2);
  }
  
  let basePay = '';
  if (pay) basePay = pay.PayTable;


  return (
    <section id="fac-pay">
      <h2>Pay Table</h2>
      <table id="payscale">
        <thead className="pay-header">
          <tr>
            <th scope="col">CPC</th>
            <th scope="col">D3</th>
            <th scope="col">D2</th>
            <th scope="col">D1</th>
            <th scope="col">AG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{basePay[0]}</td>
            {basePay[2] > 0 ? <td>{basePay[1]}</td> : <td>N/A</td>}
            {basePay[3] > 0 ? <td>{basePay[2]}</td> : <td>N/A</td>}
            {basePay[4] > 0 ? <td>{basePay[3]}</td> : <td>N/A</td>}
            <td rowSpan="2">{basePay[5]}</td>
          </tr>
          <tr>
            <td>{basePay[1]}</td>
            {basePay[2] > 0 ? <td>{basePay[2]}</td> : <td>N/A</td>}
            {basePay[3] > 0 ? <td>{basePay[3]}</td> : <td>N/A</td>}
            {basePay[4] > 0 ? <td>{basePay[4]}</td> : <td>N/A</td>}
          </tr>
        </tbody>
      </table>

      <h2>Pay Factors</h2>
        <ul id="locality" className="flex-list">
          <li>Locality</li>
          <li>{changeToPercentage(currentFacLocality[1]) + '%'} - {currentFacLocality[0]}</li>
        </ul>
        <ul id="cip" className="flex-list">
          <li>CIP</li>
          <li>{currentFacPay['CIP%']}</li>
        </ul>
        <ul className="flex-list">
          <li>COLA</li>
          <li></li>
        </ul>
        <ul className="flex-list">
          <li>Differential</li>
          <li></li>
        </ul>

    </section>

  )
}

export default DetailsPay;

DetailsPay.propTypes = {
  currentFacPay: PropTypes.object.isRequired
}