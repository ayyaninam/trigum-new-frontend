import React, { useState } from "react";
import Link from "next/link";
import {
  PairItem,
  PairItemsArray,
  PairProduct,
  ProductItemsProps,
  ProductList,
} from "@/types";
import Image from "next/image";

import { getPairProductsAllIds } from "@/processor/custom";
import PairAddToCartBtn from "./PairAddToCartBtn";
import NoProductExc from "./NoProductExc";
import ProductMiniDetails from "./product/ProductMiniDetails";

const PairProductItems: React.FC<PairItemsArray> = ({
  list,
  queryString,
  prodLoading,
}) => {
  const MemoizedProductList = list;


  return (
    <div className="h-full">
      {prodLoading ? (
        <div className="flex justify-center items-center bg-slate-50 text-green-800 w-fit mx-auto px-4 py-2 rounded-lg my-8">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-slate-100 animate-spin fill-green-800"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>

          <div className="text-3xl animate-pulse font-bold mx-2">
            Loading...
          </div>
        </div>
      ) : (
        <div className="flex flex-row  md:flex-col flex-wrap mt-20 p-4">
          {MemoizedProductList && MemoizedProductList?.length > 0 ? (
            MemoizedProductList.map((plist: PairItem) => {
              if (plist?.products.length > 0) {
                return (
                  <div className="flex flex-col bg-gray-100 rounded-lg px-8 py-8 mx-auto w-full sm:w-fit md:w-full md:place-items-end">

                  <div
                   className={`grid md:grid-cols-${
                    plist.products.length + 1
                  }  gap-4 items-end my-8 bg-gray-100 rounded-lg px-8 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full sm:w-fit md:w-full md:place-items-end`}
                  key={plist?.id}
                >
                  {plist.products.map((product: ProductList) => (
                    <Link
                      href={`/product/pair/${plist?.id}/?${
                        queryString && queryString
                      }`}
                      className="cursor-pointer space-y-4"
                      key={product?.id}
                    >
                      <Image
                        src={product?.image_urls[0]}
                        width={100}
                        height={100}
                        unoptimized={true}
                        className="w-full h-64 object-cover rounded-lg sm:w-64 md:w-72 md:h-72 mb-4"
                        alt="Product Images"
                      />
                      <span className="">
                        <ProductMiniDetails product={product && product} />
                      </span>
                    </Link>
                  ))}

                    
                  </div>
                    <div className="ml-auto">
                    <PairAddToCartBtn
                      productIds={getPairProductsAllIds(plist)}
                      productQty={1}
                      pairLink={`/product/pair/${plist?.id}/?${
                        queryString && queryString
                      }`}
                    />
                </div>
                  </div>
                );
              }
            })
          ) : (
            <NoProductExc />
          )}
        </div>
      )}
    </div>
  );
};

export default PairProductItems;
