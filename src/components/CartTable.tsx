'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { increaseProductQuantity, decreaseProductQuantity, getCartProductQuantity } from '@/lib/cart';

const CartTable = ({img, name, price, id, getCartProducts}:{img:string, name:string, price:number, id:number, getCartProducts:() => void}) => {

    const [quantity, setquantity] = useState(0)
    const [total, setTotal] = useState(0)

    const minusClicked = (id:number) =>{
        decreaseProductQuantity(id, 1)
        setquantity(getCartProductQuantity(id))

    }
    const plusClicked = (id:number) =>{
        increaseProductQuantity(id, 1)
        setquantity(getCartProductQuantity(id))
    }

    useEffect(() => {
        setquantity(getCartProductQuantity(id))
    }, [])

    useEffect(() => {
        if (quantity<1){
            getCartProducts()
        }

        setTotal(price * quantity)
    }, [quantity])
    
    if (quantity>0){
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <Image
                                src={img}
                                width={50}
                                height={50}
                                alt="user profile picture"
                                className='rounded-lg '
                                loader={()=> img}
                            />
                        </th>
                        <td className="px-6 py-4">
                            {name}
                        </td>
                        <td className="px-6 py-4">
                            
                            <button className='rounded-l-lg px-4 py-2 bg-gray-200 hover:bg-gray-300' onClick={()=>minusClicked(id)}>-</button>
                            <button className='px-4 py-2'>{quantity}</button>
                            <button className='rounded-r-lg px-4 py-2 bg-gray-200 hover:bg-gray-300' onClick={()=> plusClicked(id)}>+</button>
                        </td>
                        <td className="px-6 py-4">
                            {price ? `${price} zł` : "NOT AVAILABLE"}
                        </td>
                        <td className="px-6 py-4 text-orange-400">
                            {total ? `${total} zł` : "NOT AVAILABLE"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

}

export default CartTable;
