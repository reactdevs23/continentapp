import { useState, useContext, createContext } from "react";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(false);
  const [userName, setUserName] = useState("");
  const [existingUserName, setExistingUserName] = useState("juanbautista.eth");
  return (
    <StateData.Provider
      value={{
        userName,
        setUserName,
        existingUserName,
        setExistingUserName,
        selectedProfilePicture,
        setSelectedProfilePicture,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
