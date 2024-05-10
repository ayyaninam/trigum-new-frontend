import { UserContextType } from "@/types";
import { createContext } from "react";



const UserContext = createContext<UserContextType>(
    {
        authToken:"",
        setAuthToken:() => {},
        userName:"",
        setUserName:() => {},
        userId:"",
        setUserId:() => {},
        logout:() => {}
    }
)


export default UserContext;