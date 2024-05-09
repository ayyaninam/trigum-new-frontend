'use client'
import { useContext, useState } from "react"
import CartContext from "./CartContext"
import { getAllCartProductIds } from "@/lib/cart"

export const CartProvider:any = ({ children }:{children:any}) => {
    const [cartProductIds, setCartProductIds] = useState<string>("")

    const setcartProductIdsFunc = () => {
        setCartProductIds(getAllCartProductIds())
    }

    return (
        <CartContext.Provider value={{cartProductIds, setCartProductIds:setcartProductIdsFunc }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)