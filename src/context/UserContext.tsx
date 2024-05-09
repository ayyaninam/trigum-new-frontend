'use client'

import { getAuthToken } from '@/lib/session';
import React, { createContext, useContext, useState } from 'react';
import { UserContextType } from '@/types';
import { setDefaultAutoSelectFamily } from 'net';



const UserContext = createContext<UserContextType>({
  authToken: getAuthToken(),
  setAuthToken: () => {},
});

export const UserDetailProvider: any = ({ children }:{children:any}) => {
  const [authToken, setAuthToken] = useState<string|undefined>("");

  const setAuthTokenFunc = (token:string|undefined) => {
    setAuthToken(token)
  }

  return (
    <UserContext.Provider 
    
    value={{ 
      
      authToken, 
      setAuthToken:setAuthTokenFunc,
      
    }}
    
    
    >
      {children}
    </UserContext.Provider>
  );
};



export const useUserDetails = () => useContext(UserContext);
