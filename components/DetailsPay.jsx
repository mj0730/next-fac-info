import React from 'react';
import PropTypes from 'prop-types';
import StandardPayTable from './StandardPayTable';
import DifferentialPayTable from './DifferentialPayTable';


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
        {!currentFacPay.differentialType ? 
        <StandardPayTable basePay = {basePay} /> :
        <DifferentialPayTable basePay = {basePay} differential = {currentFacPay.differentialAmount} /> }
      </table>

      <h2>Pay Factors</h2>
        <ul className="flex-list pay-factors">
          <li>Locality</li>
          <li>{currentFacLocality[0]}</li>
          <li>{`${changeToPercentage(currentFacLocality[1])}%`}</li>
        </ul>

        {currentFacPay.differentialType && 
        <ul className="flex-list pay-factors">
          <li>Differential</li>
          <li>{currentFacPay.differentialType}</li>
          <li>{`${changeToPercentage(currentFacPay.differntialPercentage)}%`}</li>
        </ul> }

        {currentFacPay['CIP%'] > 0 &&
        <ul className="flex-list pay-factors">
          <li>CIP</li>
          <li>{`${currentFacPay['CIP%']}%`}</li>
        </ul> }

        {currentFacPay['COLA%'] > 0 &&
        <ul className="flex-list pay-factors">
          <li>COLA</li>
          <li>{`${currentFacPay['COLA%']}%`}</li>
        </ul> }

       

    </section>

  )
}

export default DetailsPay;

DetailsPay.propTypes = {
  currentFacPay: PropTypes.object.isRequired
}