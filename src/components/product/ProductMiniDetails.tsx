import { ProductList } from '@/types'
import React from 'react'

const ProductMiniDetails = ({ product }: { product: ProductList }) => {
    return (
        <>
            <div className='flex justify-center items-center text-xl font-bold text-center rounded-full p-2 bg-orange-400 aspect-square size-8 text-white font-serif'>{product?.tyre_class}</div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
                <span>{product?.brand_name}</span>
            </h5>
            <h5 className="text-xl font-bold tracking-tight text-slate-400">
                <span>{product?.tread_name}</span>
            </h5>
            <h5 className="text-xl font-bold tracking-tight text-slate-900">
                <span>{product?.size_text}</span>
            </h5>
            <h5 className="text-xl font-bold tracking-tight ">
                <span className='text-slate-400 text-sm mr-2 font-mono'>Data Prod:</span>
                <span className='text-slate-900'>{product?.dot}</span>
            </h5>
            <h5 className="text-xl font-bold tracking-tight text-slate-900">
                <span>
                    <span className='text-slate-400 text-sm mr-2 font-mono'>TREAD MIN - MAX:</span>
                    <span className='font-bold'>{product?.tread_depth_min} - {product?.tread_depth_max} mm</span>
                </span>
            </h5>
        </>
    )
}

export default ProductMiniDetails