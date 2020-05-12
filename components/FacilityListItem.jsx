import React from 'react';

const FacilityListItem = ({facilities}) => {

  return(
    <React.Fragment>
      {Object.entries(facilities).map((facility, i) => (
        <tr key={i}>
          <td key={facility[1].id}>{facility[1].id}</td>
          <td key={facility[1].name}>{facility[1].name}</td>
          <td key={facility[1].level}>{facility[1].level}</td>
          <td key={facility[1].type}>{facility[1].type}</td>
          
        </tr>
      ))}
    </React.Fragment>
  )
}

export default FacilityListItem;