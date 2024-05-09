import { getAllCartProductIds } from "@/lib/cart";
import { CartContextType } from "@/types";
import { createContext } from "react";

const CartContext = createContext<CartContextType>(
    {
        cartProductIds: getAllCartProductIds(),
        setCartProductIds:() => {}
    }
)


export default CartContext;