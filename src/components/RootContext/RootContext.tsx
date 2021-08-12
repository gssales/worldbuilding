import React, { createContext, useState } from "react";

interface RootContextInterface {
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RootContext = createContext<RootContextInterface>({});

const RootContextWrap: React.FC = ({ children }) => {
  const [value, setValue] = useState<boolean>(true);

  const defaultContext : RootContextInterface = {
    value: value,
    setValue: setValue
  };

  return (
    <RootContext.Provider value={defaultContext}>
      { children }
    </RootContext.Provider>
  );
};

export default RootContextWrap;
