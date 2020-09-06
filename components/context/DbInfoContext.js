import React, { createContext, useState } from 'react';

export const DbInfoContext = createContext();

const DbInfoContextProvider = (props) => {
  const [DbInfo, setDbInfo] = useState({});
  const [payData, setPayData] = useState({});

  return (
    // prettier-ignore
    <DbInfoContext.Provider value={[DbInfo, setDbInfo, payData, setPayData]}>
      {props.children}
    </DbInfoContext.Provider>
  );
};

export default DbInfoContextProvider;
