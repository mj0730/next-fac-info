import { createContext, useState } from 'react';

export const FacIdContext = createContext();

const FacIdContextProvider = (props) => {
  const [FacId, setFacId] = useState('');
  const storeFacId = (FacId) => {
    setFacId(FacId);
  };

  const [displayFrontPage, setDisplayFrontPage] = useState(true);

  return (
    <FacIdContext.Provider value={[FacId, storeFacId, displayFrontPage, setDisplayFrontPage]}>
      {props.children}
    </FacIdContext.Provider>
  );
};

export default FacIdContextProvider;
