import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const initialState = {
  camera: {
    position: { x: 0, y: 0, z: 1.9 },
  },
  mesh: {
    position: { x: 4, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI/5, z: 0 },
  },
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
