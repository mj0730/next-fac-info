import React from 'react';

const Pay = ({ currentFacPay }) => {
  const pay = currentFacPay;
  const labels = ['CPCMAX', 'CPC', 'D3', 'D2', 'D1', 'AG'];

  let basePay = [];
  if (pay) {
    basePay = pay.PayTable;
  }
  console.log(basePay);

  return (
    <section id="fac-pay">
      <ul>
      {basePay.map((x, i, arr) => {
        if (!x) i++;
        if (x > 0) {
          return (
          <li key={labels[i + 1]}>{`${labels[i + 1]}: ${arr[i + 1]} - ${x}`} </li>
          )
        }
      })
    }
    </ul>

    </section>

  )
}

export default Pay;