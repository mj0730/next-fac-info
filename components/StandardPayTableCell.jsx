const StandardPayTableCell = ({basePay, cip, i}) => (
  <td>{basePay[i]} {cip[i] > 0 && <span className="cip">({cip[i]})</span>}</td>
)

export default StandardPayTableCell;