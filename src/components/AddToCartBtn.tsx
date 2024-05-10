'use client'
import React, { useEffect, useState } from 'react';
import { addOrUpdateProductToCart } from '@/lib/cart';
import { useCart } from '@/context/CartContext/CartState';
import { isProductInCart } from '@/lib/cart';
import { CiShoppingBasket } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
type AddToCartBtnProps = {
    productId: number;
    productQty: number;
    fullWidth?:boolean
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ productId, productQty, fullWidth=false }) => {
    const router = useRouter();
    const [isInCart, setIsInCart] = useState(false)

    const { fetchCartProducts } = useCart();

    const addToCartClicked = async () => {
        if (isInCart) {
            router.push('/cart')
        } else {
            addOrUpdateProductToCart(productId, productQty)
            fetchCartProducts()
            setIsInCart(true)
        }
    }

    useEffect(() => {
        setIsInCart(isProductInCart(productId))
    }, [])

    useEffect(() => {
        setIsInCart(isProductInCart(productId))
    }, [productId])


    return (
        <button
            onClick={() => addToCartClicked()}
            className={`${fullWidth&&"w-full"} flex justify-center text-white ${isInCart ? "bg-green-400 hover:bg-green-500 text-xl" : "bg-orange-400 hover:bg-orange-300 text-sm"} font-medium rounded-lg px-5 py-2.5 text-center animate-bounce`}
        >
            {isInCart ? <CiShoppingBasket /> : "KUP"}
        </button>
    )
};

export default AddToCartBtn;
