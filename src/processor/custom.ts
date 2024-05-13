import { PairProductsListData } from "@/types";
import { Ref } from "react";

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

    return response.json();
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

    return response.json();
};



const getPairProductsAllIds = (productsList:PairProductsListData):string => {
  const ids = productsList?.products.map((product:any) => product.id)
  const combinedIds: string = ids.join(",");
  return combinedIds;
}

const advanceInvertorBoolen = (stringValue: string): string => (stringValue.toLowerCase() === "true" ? "true" : (stringValue.toLowerCase() === "false" ? "" : ""));



export {fetchAllSizes, fetchAllBrands, getPairProductsAllIds, advanceInvertorBoolen}