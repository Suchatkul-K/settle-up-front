import React, { createContext, useEffect, useState } from 'react'
import * as authApi from "../../../api/auth";
import { toast } from 'react-toastify';
import { clearToken, getToken, storeToken } from '../../../utils/local-storage';

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
          console.log(res.data.user)
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        })
        // .finally(()=> {console.log(authUser)})
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    console.log(res.data);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  const logout = () => {
    setAuthUser(null)
    clearToken()
  }

  const updateUser = async user => {
    const res = await authApi.updateUser(user)
    console.log(res.data.user) 
    console.log(authUser)
    setAuthUser(res.data.user)
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, register, login, logout, updateUser }}>
        {children}
    </AuthContext.Provider>
  )
}

