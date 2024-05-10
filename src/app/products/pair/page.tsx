'use client'
import React, { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import ProductItems from "@/components/ProductItems";
import { useSearchParams } from 'next/navigation'
import { fetchAllBrands, fetchAllSizes } from "@/processor/custom";
import { AllBrandsType, AllSizesType, PairItem, PairItemsArray } from "@/types";
import PairProductItems from "@/components/PairProductItems";
import { useData } from "@/context/DataContext/DataState";

const PairProducts = () => {

  const search = useSearchParams()

  const { allBrands, allSizes } = useData();
  const [products, setProducts] = useState<PairItem[] | null>(null)
  const [prodLoading, setprodLoading] = useState<boolean>(true)

  const [searchParams, setSearchParams] = useState({
    size: search.get('size') || "",
    brands: search.get('brands') || "",
    issteel: search.get('issteel') || "",
    isdrive: search.get('isdrive') || "",
    istrailer: search.get('istrailer') || "",
    isretreaded: search.get('isretreaded') || "",
    ispair: search.get('ispair') || "",
  });



  const queryParams = {
    size: searchParams.size,
    brands: searchParams.brands === "0" ? "" : searchParams.brands,
    is_steel: searchParams.issteel,
    is_drive: searchParams.isdrive,
    is_trailer: searchParams.istrailer,
    is_retreaded: searchParams.isretreaded,
};

  const queryString = new URLSearchParams(queryParams).toString();

  const fetchProducts = async () => {
    setprodLoading(true)

    const response = await fetch(
      `${process.env.API_URL}/api/tyreadderapp/pairs/?${queryString}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const ListData = data && data;
    setProducts(ListData)
    setprodLoading(false)
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [searchParams])

    useEffect(() => {
        setSearchParams({
            size: search.get('size') || "",
            brands: search.get('brands') || "",
            issteel: search.get('issteel') || "",
            isdrive: search.get('isdrive') || "",
            istrailer: search.get('istrailer') || "",
            isretreaded: search.get('isretreaded') || "",
            ispair: search.get('ispair') || "",
        })
    }, [search])

  
  return (
    <div>
      <SearchBox size={searchParams.size} brands={searchParams.brands} issteel={searchParams.issteel} isdrive={searchParams.isdrive} istrailer={searchParams.istrailer} isretreaded={searchParams.isretreaded} allBrands={allBrands} allSizes={allSizes} ispair={searchParams.ispair}
      />

      <div className="my-8">
        <h1 className="text-start sm:text-center text-5xl text-mono font-bold decoration-orange-400 underline sm:mx-0 mx-8">{products?products?.length:0} Pairs Found</h1>
        <PairProductItems list={products} queryString={queryString} prodLoading={prodLoading} />
      </div>
    </div>
  );
}
export default PairProducts;
