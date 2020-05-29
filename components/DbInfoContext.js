import React, { createContext, useState } from 'react';

export const DbInfoContext = createContext();

const DbInfoContextProvider = (props) => {
  const [ DbInfo, setDbInfo ] = useState({test: {id : 'this is some placeholder text'}});
  
  return (
    <DbInfoContext.Provider value={[DbInfo, setDbInfo]}>
      {props.children}
    </DbInfoContext.Provider>
  )
}

export default DbInfoContextProvider;