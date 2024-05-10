'use client'

import { useContext, useEffect, useState } from "react"
import CartContext from "./CartContext"
import { getAllCartProductIds } from "@/lib/cart"
import { CartProductType } from "@/types"

export const CartProvider: any = ({ children }: { children: any }) => {


    const [cartProducts, setCartProducts] = useState<CartProductType | null>(null)

    const [cartLoading, setCartLoading] = useState<boolean>(true)


    const fetchCartProducts = () => {
        const cartProductIds = getAllCartProductIds();

        if (cartProductIds) {
            fetch(`${process.env.API_URL}/api/tyreadderapp/products/?ids=${cartProductIds ? cartProductIds : -1}`)
                .then((res) => res.json())
                .then((data) => {

                    setCartProducts(data)
                    setCartLoading(false)
                })

        } else {
            setCartProducts(null)
            setCartLoading(false)
        }
    }


    useEffect(() => {
        fetchCartProducts()
    }, [])


    return (
        <CartContext.Provider
            value={{
                cartProducts,
                cartLoading,
                fetchCartProducts,
            }}>
            {children}

        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)