import React from 'react';

const AppContext=React.createContext({})

export default AppContext;





/*

import useInitialState from "../hooks/useInitialState";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;*/