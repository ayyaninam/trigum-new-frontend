import { CompContextType } from "@/types";
import { createContext } from "react";



const CompContext = createContext<CompContextType>(
    {
        compProductsIds:[],
        setCompProductsIds:()=>{}

    }
)


export default CompContext;