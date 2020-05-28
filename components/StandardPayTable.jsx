import StandardPayTableCell from './StandardPayTableCell';

const StandardPayTable = ({basePay, cip}) => (
    <React.Fragment>
      <tbody>
        <tr>
          <StandardPayTableCell basePay={basePay} cip ={cip} i = {0} />
          {basePay[2] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {1} /> : <td>N/A</td>}
          {basePay[3] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {2} /> : <td>N/A</td>}
          {basePay[4] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {3} /> : <td>N/A</td>}
          <td rowSpan="2">{basePay[5]} {cip[5] > 0  && <span className="cip">({cip[5]})</span>}</td>
        </tr>
        <tr>
        <StandardPayTableCell basePay={basePay} cip ={cip} i = {1} />
          {basePay[2] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {2} /> : <td>N/A</td>}
          {basePay[3] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {3} /> : <td>N/A</td>}
          {basePay[4] > 0 ? <StandardPayTableCell basePay={basePay} cip ={cip} i = {4} />: <td>N/A</td>}
        </tr>
      </tbody>
    </React.Fragment>
  )

export default StandardPayTable;