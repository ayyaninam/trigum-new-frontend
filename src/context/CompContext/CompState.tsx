'use client'

import { useContext, useEffect, useState } from "react"
import CompContext from "./CompContext"
import { adjustInComparisonProducts, getComparisonProducts, parseComparisonProducts } from "@/lib/comparison"


export const CompProvider: any = ({ children }: { children: any }) => {


    const [compProductsIds, setCompProductsIds] = useState<number[]>([])

    const setCompProductsIdsFunc = (id:number) =>{
        adjustInComparisonProducts(id)
        console.log(parseComparisonProducts(getComparisonProducts()))
        setCompProductsIds(parseComparisonProducts(getComparisonProducts()))
    }

    useEffect(() => {
        setCompProductsIds(parseComparisonProducts(getComparisonProducts()))
    }, [])
    

    return (
        <CompContext.Provider
            value={{
                compProductsIds,
                setCompProductsIds:setCompProductsIdsFunc,
            }}
            >
            {children}

        </CompContext.Provider>
    )
}


export const useComp = () => useContext(CompContext)