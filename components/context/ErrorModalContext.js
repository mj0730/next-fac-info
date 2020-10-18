import { createContext, useState } from 'react';

export const ErrorModalContext = createContext();

const ErrorModalContextProvider = (props) => {
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <ErrorModalContext.Provider value={[displayErrorModal, setDisplayErrorModal]}>
      {props.children}
    </ErrorModalContext.Provider>
  );
};

export default ErrorModalContextProvider;
