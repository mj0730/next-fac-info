const StandardPayTable = ({basePay, cip}) => (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{basePay[0]} {cip[0] > 0 && <span className="cip">({cip[0]})</span>}</td>
          {basePay[2] > 0 ? <td>{basePay[1]} {cip[1] > 0 && <span className="cip">({cip[1]})</span>}</td> : <td>N/A</td>}
          {basePay[3] > 0 ? <td>{basePay[2]} {cip[2] > 0  && <span className="cip">({cip[2]})</span>}</td> : <td>N/A</td>}
          {basePay[4] > 0 ? <td>{basePay[3]} {cip[3] > 0  && <span className="cip">({cip[3]})</span>}</td> : <td>N/A</td>}
          <td rowSpan="2">{basePay[5]} {cip[5] > 0  && <span className="cip">({cip[5]})</span>}</td>
        </tr>
        <tr>
          <td>{basePay[1]} {cip[1] > 0  && <span className="cip">({cip[1]})</span>}</td>
          {basePay[2] > 0 ? <td>{basePay[2]} {cip[2] > 0  && <span className="cip">({cip[2]})</span>}</td> : <td>N/A</td>}
          {basePay[3] > 0 ? <td>{basePay[3]} {cip[3] > 0  && <span className="cip">({cip[3]})</span>}</td> : <td>N/A</td>}
          {basePay[4] > 0 ? <td>{basePay[4]} {cip[4] > 0  && <span className="cip">({cip[4]})</span>}</td> : <td>N/A</td>}
        </tr>
      </tbody>
    </React.Fragment>
  )

export default StandardPayTable;