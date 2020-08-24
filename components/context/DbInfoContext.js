import React, { createContext, useState } from 'react';

export const DbInfoContext = createContext();

const DbInfoContextProvider = (props) => {
  const [ DbInfo, setDbInfo ] = useState({});
  
  return (
    <DbInfoContext.Provider value={[DbInfo, setDbInfo]}>
      {props.children}
    </DbInfoContext.Provider>
  )
}

export default DbInfoContextProvider;