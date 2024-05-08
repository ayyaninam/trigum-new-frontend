
import React from "react";
import SearchBox from "@/components/SearchBox";
import ProductItems from "@/components/ProductItems";
import { useSearchParams } from 'next/navigation'
import { fetchAllBrands, fetchAllSizes } from "@/processor/custom";
import { AllBrandsType, AllSizesType } from "@/types";

const Products = async ({params, searchParams} : {
  params: { slug: string };
  searchParams?: { [key: string]: string };
}) => {

  const allBrands: AllBrandsType[] = await fetchAllBrands()
  const allSizes: AllSizesType[] = await fetchAllSizes()

  const size = searchParams?.size || '';
  const brands = searchParams?.brands || '';
  const issteel = searchParams?.issteel || '';
  const isdrive = searchParams?.isdrive || '';
  const istrailer = searchParams?.istrailer || '';
  const isretreaded = searchParams?.isretreaded || '';
  const ispair = searchParams?.ispair || '';


  const queryParams = {
    size: size,
    brands: brands==="0"?"":brands,
    is_steel: issteel,
    is_drive: isdrive,
    is_trailer: istrailer,
    is_retreaded: isretreaded,
  };

  const queryString = new URLSearchParams(queryParams).toString();

  const fetchProducts = async () => {
    const response = await fetch(
      `${process.env.API_URL}/api/tyreadderapp/products/?${queryString}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const ListData = data?.results;
    return ListData;
  };
  const list = await fetchProducts()


  return (
    <div>
      <SearchBox size={size} brands={brands} issteel={issteel} isdrive={isdrive} istrailer={istrailer} isretreaded={isretreaded} allBrands={allBrands} allSizes={allSizes} ispair={ispair}
      />

      <div className="my-8">
        <h1 className="text-start sm:text-center text-5xl text-mono font-bold decoration-orange-400 underline sm:mx-0 mx-8">{list.length} Products Found</h1>
        <ProductItems list={list} />
      </div>
    </div>
  );
}
export default Products;
