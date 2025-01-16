import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  const getUser  = ()  => {
    api.get('./user/get-user').then(({data}) => {
        setUser(data.user)
        setLogin(true);
    }).catch((error) => {
      console.log('Usuário não autenticado')
    })
  }

useEffect(() => {
  getUser();
}, [] )

  const handleLogin = (email: string, password: string) => {
    api.post('/user/sign-in', {email, password}).then(({data}) =>{
      setLogin(true);
      localStorage.setItem('token', data.token);
      getUser();
    }).catch((error)=> {
      console.log('Não foi possível fazer o login', error)
    })
    
  }

  return (
    <UserContext.Provider value={{
      login,
      user,
      handleLogin
    }}>
      {children}
    </UserContext.Provider>
  )
}