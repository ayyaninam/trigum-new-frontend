import { CartContextType } from "@/types";
import { createContext } from "react";



const CartContext = createContext<CartContextType>(
    {
        cartProducts:null,
        cartLoading: true,
        fetchCartProducts:()=>{},
    }
)


export default CartContext;