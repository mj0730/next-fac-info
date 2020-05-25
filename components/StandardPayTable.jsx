const StandardPayTable = ({basePay}) => (
    <React.Fragment>
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
    </React.Fragment>
  )

export default StandardPayTable;