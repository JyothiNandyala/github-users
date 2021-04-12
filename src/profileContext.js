import React, { useState } from "react";

export const ProfileContext = React.createContext();

const ProfileContextProvider = ({ children }) => {
  const [users, setUsers] = useState({});

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  const contextValue = {
    users,
    setUsers,
    repos,
    setRepos,
    userInput,
    setUserInput,
    error,
    setError,
    handleSearch: (e) => setUserInput(e.target.value),
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileContextProvider;
