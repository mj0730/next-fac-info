import React, { createContext, useState } from 'react';

export const DbInfoContext = createContext();

const DbInfoContextProvider = (props) => {
  const [ DbInfo, setDbInfo ] = useState('');
  const storeDbInfo = DbInfo => {
    setDbInfo(DbInfo)
  }

  return (
    <DbInfoContext.Provider value={[DbInfo, storeDbInfo]}>
      {props.children}
    </DbInfoContext.Provider>
  )
}

export default DbInfoContextProvider;