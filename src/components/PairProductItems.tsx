import React, { useMemo } from 'react'
import Link from 'next/link';
import { PairItem, PairItemsArray, PairProduct, ProductItemsProps } from '@/types';
import Image from 'next/image';

const PairProductItems: React.FC<PairItemsArray> = ({ list, queryString }) => {

    // const MemoizedProductList = useMemo(() => list, [list]);
    const MemoizedProductList = list
    const isLoading = false

    return (
        <div className="h-full">
            {isLoading ? (
                <div className='flex justify-center items-center my-32'>
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-orange-400 animate-spin">
                        </div>
                    </div>
                </div>
            ) : (

                <div className="flex flex-row md:flex-col flex-wrap mt-20 p-4">
                    {MemoizedProductList && MemoizedProductList?.length > 0 ? MemoizedProductList.map((plist: PairItem) => {
                        if (plist?.products.length>0){
                        return (

                        <div className={`grid md:grid-cols-${plist.products.length+1}  gap-4 items-end my-8 bg-gray-100 rounded-lg px-8 py-8 grid-cols-1 mx-auto w-full sm:w-fit md:w-full md:place-items-end`} key={plist?.id}>

                            {plist.products.map((product: PairProduct) => (
                                <Link href={`/product/pair/${plist?.id}/?${queryString&&queryString}`} className='cursor-pointer' key={product?.size_text}>
                                    <Image
                                        src={product?.image_urls[0]}
                                        width={100}
                                        height={100}
                                        unoptimized={true}
                                        className='w-full h-64 object-cover rounded-lg sm:w-64 md:w-72 md:h-72'
                                        alt="Product Images"
                                    />
                                    <span >
                                        <h5 className="text-xl font-bold tracking-tight text-gray-900">
                                            <span>{product?.brand_name}</span>
                                        </h5>
                                        <h5 className="text-xl font-bold tracking-tight text-slate-400">
                                            <span>{product?.tread_name}</span>
                                        </h5>
                                    </span>

                                </Link>
                            ))}

                            <Link href={"/"} className="text-white h-fit bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center animate-bounce max-w-16">
                                Kup
                            </Link>
                        </div>
                    )
                }
                })
                        : (<>
                            <div></div>
                            <div className="cursor-pointer text-center mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No Product Found!</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Please try again or adjust your filters carefully.</p>
                            </div>
                        </>
                        )}

                </div>
            )}
        </div>
    )
}

export default PairProductItems