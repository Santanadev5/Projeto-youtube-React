import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{
      login,
      user,
    }}>
      {children}
    </UserContext.Provider>
  )
}