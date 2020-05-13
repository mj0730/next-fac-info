import React from 'react';

const DetailsPay = ({ currentFacPay }) => {
  const pay = currentFacPay;
  
  let basePay = '';
  if (pay) basePay = pay.PayTable;

  return (
    <section id="fac-pay">
      <h2>Base Pay Table</h2>
      <div className="grid-container">
        <div>CPC</div>
        <div>D3</div>
        <div>D2</div>
        <div>D1</div>
        <div>AG</div>

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