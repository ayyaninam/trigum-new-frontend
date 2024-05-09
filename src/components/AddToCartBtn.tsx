'use client'
import React, {useState} from 'react';
import { addOrUpdateProductToCart } from '@/lib/cart';
import { useCart } from '@/context/CartContext/CartState';

type AddToCartBtnProps =  {
    productId: number;
    productQty: number ;
    discount: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ productId, productQty }) => {

    const [loading, setLoading] = useState(false)

    const {setCartProductIds} = useCart()

    const addToCartClicked = async () => {
        setLoading(true)
        addOrUpdateProductToCart(productId, productQty)
        setLoading(false)
        setCartProductIds()
    }

    return (
        <button 
            onClick={() => addToCartClicked()}
            className="text-white bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center animate-bounce"
        >
            {loading ? (
              ("ADDING...")
            ) :
              ("Kup")
            }
        </button>
    );
};

export default AddToCartBtn;
