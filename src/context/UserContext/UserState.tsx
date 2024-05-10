'use client'

import { useContext, useEffect, useState } from "react"
import UserContext from "./UserContext"
import { CookieValueTypes } from "cookies-next"
import { getAuthToken, setAuthToken as setAuthTokenCookie, getUserName, setUserName as setUserNameCookie, getUserId, setUserId as setUserIdCookie } from "@/lib/session"

export const UserProvider: any = ({ children }: { children: any }) => {


    const [authToken, setAuthToken] = useState<CookieValueTypes>()
    const [userName, setUserName] = useState<CookieValueTypes>()
    const [userId, setUserId] = useState<CookieValueTypes>()


    const setUserNameFunc = (token:string|undefined) => {
        setUserName(token)
        setUserNameCookie(token)
    }

    const setAuthTokenFunc = (token:string|undefined) => {
        setAuthToken(token)
        setAuthTokenCookie(token)
    }
    const setUserIdFunc = (token:string|undefined) => {
        setUserId(token)
        setUserIdCookie(token)
    }


    const logout= () => {
        setUserNameFunc("")
        setAuthTokenFunc("")
        setUserIdFunc("")
    }
    
    useEffect(() => {
        setAuthToken(getAuthToken())
        setUserName(getUserName())
        setUserId(getUserId())
    }, [])
    
    return (
        <UserContext.Provider
            value={{
                authToken,
                setAuthToken:setAuthTokenFunc,
                userName,
                setUserName:setUserNameFunc,
                userId,
                setUserId:setUserIdFunc,
                logout
            }}>
            {children}

        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext)