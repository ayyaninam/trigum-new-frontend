'use client'
import React, { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import ProductItems from "@/components/ProductItems";
import { fetchAllBrands, fetchAllSizes } from "@/processor/custom";
import { AllBrandsType, AllSizesType, ProductList } from "@/types";

import { useSearchParams } from 'next/navigation'

import { useData } from "@/context/DataContext/DataState";
import { useCart } from "@/context/CartContext/CartState";
import BreadCrumb from "@/components/BreadCrumb";

const Products = () => {

    const search = useSearchParams();

    const { allBrands, allSizes } = useData()

    const [products, setProducts] = useState<ProductList[] | null>(null)
    const [prodLoading, setprodLoading] = useState(true)


    const {cartProducts} = useCart()

    const [searchParams, setSearchParams] = useState({
        size: search.get('size') || "",
        brands: search.get('brands') || "",
        issteel: search.get('issteel') || "",
        isdrive: search.get('isdrive') || "",
        istrailer: search.get('istrailer') || "",
        isretreaded: search.get('isretreaded') || "",
        ispair: search.get('ispair') || "",
        advance: search.get('advance') === "true",
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
            `${process.env.API_URL}/api/tyreadderapp/products/?${queryString}`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const ListData = data?.results;
        setProducts(ListData)
        setprodLoading(false)
    };



    useEffect(() => {
        fetchProducts()
    }, [])
    useEffect(() => {
        fetchProducts()
    }, [searchParams, cartProducts])

    useEffect(() => {
        setSearchParams({
            size: search.get('size') || "",
            brands: search.get('brands') || "",
            issteel: search.get('issteel') || "",
            isdrive: search.get('isdrive') || "",
            istrailer: search.get('istrailer') || "",
            isretreaded: search.get('isretreaded') || "",
            ispair: search.get('ispair') || "",
            advance: search.get('advance') === "true",
        })
    }, [search])

    return (
        <div>
            <SearchBox size={searchParams.size} brands={searchParams.brands} issteel={searchParams.issteel} isdrive={searchParams.isdrive} istrailer={searchParams.istrailer} isretreaded={searchParams.isretreaded} allBrands={allBrands} allSizes={allSizes} ispair={searchParams.ispair} advance={searchParams.advance}
            />

            <div className="my-8">
                <h1 className="text-start sm:text-center text-5xl text-mono font-bold decoration-orange-400 underline sm:mx-0 mx-8">{products ? products.length : 0} Products Found</h1>
                <BreadCrumb
                links={[
                    {name:"Home", link:"/"},
                    {name:"Products", link:"/"},
                ]}
                />
                <ProductItems list={products} prodLoading={prodLoading} queryString={queryString} />
            </div>
        </div>
    );
}
export default Products;
