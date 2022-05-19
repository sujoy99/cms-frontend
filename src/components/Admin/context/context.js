import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser();
  });
  const setCurrentUser = () => {
    setCurrentuser(localStorage.getItem("adminEmail"));
  };
  const value = {
    currentUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {
        //   !loading &&
        children
      }
    </AuthContext.Provider>
  );
}
