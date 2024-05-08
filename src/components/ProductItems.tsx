import React, {useMemo} from 'react'
import Link from 'next/link';
import { ProductItemsProps } from '@/types';
import Image from 'next/image';
const ProductItems:React.FC<ProductItemsProps> = ({ list }) => {

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
        // <div className="grid  sm:grid-cols-2 lg:grid-cols-3 mt-20 p-4">
        //     {" "}
        //     {MemoizedProductList?.length > 0 ? MemoizedProductList.map((product) => (
        //         <div
        //             key={product?.id}
        //             className="border border-gray-400 rounded-lg py-4  flex flex-col space-y-1 p-4 m-2 bg-gray-100"
        //         >
        //             <div className="flex justify-between">
        //                 <Link href={`/product/${product?.id}`}>
        //                     <h2 className="text-xl font-bold text-red-800">
        //                         {product?.brand_name}
        //                     </h2>
        //                 </Link>

        //                 <div className="cursor-pointer">
        //                     <BsCameraReelsFill />
        //                 </div>
        //             </div>
        //             <h3 className="text-2xl font-bold">{product?.tread_name}</h3>
        //             {/* <div className="grid grid-cols-2 bg-red-500 p-2 rounded-md">
        //                 <div>
        //                     <p>Rozmiar:</p>
        //                     <p>Oś:</p>
        //                     <p>Przeznaczenie:</p>
        //                     <p>Data prod:</p>
        //                     <p>Głebokość bieżnika</p>
        //                 </div>
        //                 <div>
        //                     <p>{product?.size_text}</p>
        //                     <p>Sterująca</p>
        //                     <p>Regionalna</p>
        //                     <p>{new Date(product.created).getFullYear()}</p>
        //                     <p><span>{product?.tread_depth_min}</span>-<span>{product?.tread_depth_max}</span>mm</p>
        //                 </div>
        //             </div> */}

        //             <div className="rounded-lg w-full">
        //                 {/* <img src={props.image_1} className="object-cover h-60 w-full"></img> */}
        //                 <div className="h-[300px]">
        //                     <img src={product?.image_urls[0]} alt={product?.id} className="w-full h-full object-cover rounded-md" />
        //                 </div>
        //             </div>
        //             <div className="flex justify-between items-center">
        //                 <h3>Cena:</h3>
        //                 <h3>
        //                     <span className="text-2xl">{product?.net_price} zł</span> netto/1szt
        //                 </h3>
        //             </div>
        //             <div className="flex justify-end">
        //                 <Link href={"/"}>
        //                     <div className="bg-red-500 p-2 rounded-md text-white w-32 h-16 flex items-center justify-center">
        //                         Kup
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //     ))  : (<>
        //         <div></div>
        //         <div className="cursor-pointer text-center mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No Product Found!</h5>
        //             <p className="font-normal text-gray-700 dark:text-gray-400">Please try again or adjust your filters carefully.</p>
        //         </div>
        //     </>
        //     )}
        // </div>

        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 mt-20 p-4">
            {MemoizedProductList&& MemoizedProductList?.length > 0 ? MemoizedProductList.map((product) => (
                <div key={product?.id} className="w-[99%] max-w-full bg-white border border-gray-200 rounded-lg shadow mb-2">
                    <Link href={`/product/${product?.id}`}>
                        <Image
                        src={product?.image_urls[0]}
                        alt={product?.brand_name}
                        width={100}
                        height={100}
                        unoptimized={true}
                        className="p-8 rounded w-full h-80 sm:h-96 object-cover"
                        />
                    </Link>
                    <div className="px-5 pb-5">
                    <Link href={`/product/${product?.id}`}>
                            <h5 className="text-xl font-bold tracking-tight text-gray-900">
                                <span>{product?.brand_name}</span>
                            </h5>
                            <h5 className="text-xl font-bold tracking-tight text-slate-400">
                                <span>{product?.tread_name}</span>
                            </h5>
                        </Link>
                        <div className="flex items-center justify-between">
                            <div className='space-x-1'>
                                <span className="cursor-pointer text-3xl font-bold text-gray-900 animate-pulse">
                                    <span>{product?.net_price} zł</span>
                                </span>
                                <span className="text-lg font-medium text-gray-500 ">
                                    <span>netto/1szt</span>
                                </span>
                            </div>
                            <Link href={`/product/${product?.id}`} className="text-white bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center animate-bounce">
                                Kup
                            </Link>
                        </div>
                    </div>
                </div>

            ))
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

export default ProductItems