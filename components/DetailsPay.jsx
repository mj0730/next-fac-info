import React from 'react';
import PropTypes from 'prop-types';

const DetailsPay = ({ currentFacPay }) => {
  const pay = currentFacPay;
  
  let basePay = '';
  if (pay) basePay = pay.PayTable;

  return (
    <section id="fac-pay">
      <h2>Base Pay Table</h2>
      <div className="grid-container payscale-grid">
        <div id="cpc">CPC</div>
        <div id="d3">D3</div>
        <div id="d2">D2</div>
        <div id="d1">D1</div>
        <div id="ag">AG</div>

        <div>{basePay[0]}</div>
        <div>{basePay[1]}</div>
        <div>{basePay[2]}</div>
        <div>{basePay[3]}</div>
        <div>{basePay[4]}</div>

        <div>{basePay[1]}</div>
        <div>{basePay[2]}</div>
        <div>{basePay[3]}</div>
        <div>{basePay[4]}</div>
        <div>{basePay[5]}</div>
        
      </div>

    </section>

  )
}

export default DetailsPay;

DetailsPay.propTypes = {
  currentFacPay: PropTypes.object.isRequired
}