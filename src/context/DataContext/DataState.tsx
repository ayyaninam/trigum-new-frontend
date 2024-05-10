'use client'

import { useContext, useEffect, useState } from "react"
import DataContext from "./DataContext"
import { AllBrandsType, AllSizesType } from "@/types"

export const DataProvider: any = ({ children }: { children: any }) => {


    const [allBrands, setAllBrands] = useState<AllBrandsType[]>([])
    const [allSizes, setAllSizes] = useState<AllSizesType[]>([])





    const fetchAllSizes = async () => {
        let response = await fetch(`${process.env.API_URL}/api/tyreadderapp/sizes/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        setAllSizes(await response.json());
    };

    const fetchAllBrands = async () => {
        let response = await fetch(`${process.env.API_URL}/api/tyreadderapp/brands/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        setAllBrands(await response.json())
    };



    useEffect(() => {
        fetchAllBrands();
        fetchAllSizes();
    }, [])
    

    return (
        <DataContext.Provider
            value={{
                allBrands,
                allSizes,
            }}>
            {children}

        </DataContext.Provider>
    )
}


export const useData = () => useContext(DataContext)