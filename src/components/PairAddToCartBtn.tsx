'use client'

import React, { useEffect, useState } from 'react';
import { addOrUpdateProductToCart, getCartProductQuantity } from '@/lib/cart';
import { useCart } from '@/context/CartContext/CartState';
import { isProductInCart } from '@/lib/cart';
import { CiShoppingBasket } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
type AddToCartBtnProps = {
    productIds: string;
    productQty: number;
    fullWidth?: boolean
}

const PairAddToCartBtn: React.FC<AddToCartBtnProps> = ({ productIds, productQty, fullWidth = false }) => {

    const router = useRouter();
    const [isInCart, setIsInCart] = useState(false)

    const { fetchCartProducts, cartProducts } = useCart();

    const addToCartClicked = async () => {
        if (isInCart) {
            router.push('/cart')
        } else {
            if (productIds) {
                productIds?.split(',').map((productId: string) => {
                    if (getCartProductQuantity(parseInt(productId))) {
                        addOrUpdateProductToCart(parseInt(productId), 0)
                    } else {
                        addOrUpdateProductToCart(parseInt(productId), productQty)
                    }

                })
            }
            fetchCartProducts()
            setIsInCart(true)
            router.push('/cart')
        }
    }


    const checkpoint = () =>{
        if (productIds) {
            const ids: string[] = productIds.split(',');
            let isInCartnow = false;

            for (let i = 0; i < ids.length; i++) {
                const productId = parseInt(ids[i]);
                const isIn = isProductInCart(productId);
                setIsInCart(isIn);
                if (isIn) {
                    isInCartnow = true;
                    break;
                }
            }
            setIsInCart(isInCartnow);
        }
    }

    useEffect(() => {
        checkpoint()
    }, [])

    useEffect(() => {
        checkpoint()
    }, [productIds, cartProducts])


    return (
        <button
            onClick={() => addToCartClicked()}
            className={`${fullWidth && "w-full"} flex justify-center text-white ${isInCart ? "bg-green-400 hover:bg-green-500 text-xl" : "bg-orange-400 hover:bg-orange-500 text-sm"} font-medium rounded-lg px-5 py-2.5 text-center`}
        >
            {isInCart ? <CiShoppingBasket /> : "KUP"}
        </button>
    )
};

export default PairAddToCartBtn;
