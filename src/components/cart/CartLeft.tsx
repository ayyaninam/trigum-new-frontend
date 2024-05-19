'use client'
import React from 'react'
import CartTable from '../CartTable'
import { useCart } from '@/context/CartContext/CartState'
import { useScopedI18n } from '@/locales/client'
const CartLeft = ({updateCartTotal}:{updateCartTotal?: () => void}) => {
    
    const {cartProducts, cartLoading} = useCart();
    const t: any = useScopedI18n("signupConverts");

    return (

        <div>
            {!cartLoading && cartProducts && cartProducts?.results && cartProducts?.results?.length > 0 && (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>

                        <th scope="col" className="px-6 py-3">
                            {t("Name")}
                        </th>

                        <th scope="col" className="px-6 py-3">
                            {t("Price")}
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {cartProducts.results?.map((product) => (
                        <CartTable
                            key={product?.id}
                            img={product?.image_urls[0]}
                            name={`${product?.brand_name} ${product?.tread_name} ${product?.size_text}`}
                            price={product?.net_price}
                            id={product?.id}
                            updateCartTotal={updateCartTotal}
                            onlyWithPrice={true}

                        />
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default CartLeft