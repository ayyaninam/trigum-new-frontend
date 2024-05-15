'use client'

import React, { useEffect, useState } from 'react';
import { addOrUpdateProductToCart, getCartProductQuantity } from '@/lib/cart';
import { useCart } from '@/context/CartContext/CartState';
import { isProductInCart } from '@/lib/cart';
import { CiShoppingBasket } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';
type AddToCartBtnProps = {
    productIds: string;
    productQty: number;
    fullWidth?: boolean;
    pairLink?:string;
}

const PairAddToCartBtn: React.FC<AddToCartBtnProps> = ({ productIds, productQty, fullWidth = false, pairLink }) => {

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


    const checkpoint = () => {
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
        <div className='flex space-x-2'>
            <button
                onClick={() => addToCartClicked()}
                className={`${fullWidth && "w-full"} flex justify-center text-white ${isInCart ? "bg-green-400 hover:bg-green-500 " : "bg-orange-400 hover:bg-orange-500"} font-medium rounded-lg px-5 py-2.5 text-center text-xl`}
            >

                {isInCart ? <CiShoppingBasket /> : <FaCartPlus/>}
            </button>
            {!fullWidth && (
                <Link href={pairLink?pairLink:"/"} className='hover:bg-gray-100 hover:border-gray-300 bg-white border border-white px-4 py-2 rounded-lg text-xl text-center'>
                    <BsArrowRight/>
                </Link>
            )}
        </div>
    )
};

export default PairAddToCartBtn;
