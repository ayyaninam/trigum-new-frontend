'use client'

import Image from 'next/image';
import { increaseProductQuantity, decreaseProductQuantity, getCartProductQuantity } from '@/lib/cart';
import React, { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext/CartState'
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';

const CartTable = ({ img, name, price, id, updateCartTotal, onlyWithPrice = false }: { img: string, name: string, price: number, id: number, updateCartTotal?: () => void, onlyWithPrice?: boolean }) => {


    const { fetchCartProducts } = useCart()
    const t:any = useScopedI18n("ProductMiniDetail")
    const [quantity, setquantity] = useState(0)
    const [total, setTotal] = useState(0)

    const minusClicked = (id: number) => {
        if (getCartProductQuantity(id) === 1) {
            if (confirm("Are you sure to exclude this product from cart?") === true) {
                decreaseProductQuantity(id, 1)
                setquantity(getCartProductQuantity(id))
            }
        } else {
            decreaseProductQuantity(id, 1)
            setquantity(getCartProductQuantity(id))
        }
    }
    const plusClicked = (id: number) => {

        increaseProductQuantity(id, 1)
        setquantity(getCartProductQuantity(id))
    }


    const removeProductsFromCartCalled = (prodID:number) => {
        decreaseProductQuantity(prodID, 1)
        fetchCartProducts();
    }

    useEffect(() => {
        setquantity(getCartProductQuantity(id))
    }, [])

    useEffect(() => {
        const totalprice = price * quantity
        if (quantity < 1) {
            fetchCartProducts()
        }
        setTotal(totalprice)
        updateCartTotal && updateCartTotal();
    }, [quantity])


    if (quantity > 0) {
        return (

            <tr key={id} className="bg-white border-b">
                {!onlyWithPrice && (
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <Link href={`product/${id}`}>
                            <Image
                                src={img}
                                width={50}
                                height={50}
                                alt="user profile picture"
                                className='rounded-lg '
                                loader={() => img}
                            />
                        </Link>
                    </th>
                )}


                    <th className="px-6 py-4">
                        <Link href={`product/${id}`}>
                            {name}
                        </Link>
                    </th>



                {/* <th className="px-6 py-4">
                    <button className='rounded-l-lg px-4 py-2 bg-gray-200 hover:bg-gray-300' onClick={() => minusClicked(id)}>-</button>
                    <button className='px-4 py-2'>{quantity}</button>
                    <button className='rounded-r-lg px-4 py-2 bg-gray-200 hover:bg-gray-300' onClick={() => plusClicked(id)}>+</button>
                </th> */}

                {onlyWithPrice && (

                    <th className="px-6 py-4">
                        {price ? `${price} zł` : "NOT AVAILABLE"}
                    </th>
                )}
                {!onlyWithPrice && (

                    <th className="px-6 py-4">
                        <div onClick={(e) => removeProductsFromCartCalled(id&&id)} className='bg-orange-400 rounded-lg px-4 py-2 text-center text-white cursor-pointer'>{t("Remove")}</div>
                    </th>
                )}


                {/* <th className="px-6 py-4 text-orange-400">
                    {total ? `${total} zł` : "NOT AVAILABLE"}
                </th> */}
            </tr>

        );
    }

}


export default CartTable;