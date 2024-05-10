import { DataContextType } from "@/types";
import { createContext } from "react";



const DataContext = createContext<DataContextType>(
    {
        allBrands:[],
        allSizes:[],
    }
)

export default DataContext;