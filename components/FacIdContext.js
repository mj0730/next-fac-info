import React, { createContext, useState } from 'react';

export const FacIdContext = createContext();

const FacIdContextProvider = (props) => {
  const [ FacId, setFacId ] = useState('');
  const storeFacId = FacId => {
    setFacId(FacId)
  }

  return (
    <FacIdContext.Provider value={[FacId, storeFacId]}>
      {props.children}
    </FacIdContext.Provider>
  )
}

export default FacIdContextProvider;