'use client'
import React, {useState} from 'react';
import { addOrUpdateProductToCart } from '@/lib/cart';
type AddToCartBtnProps =  {
    productId: number;
    productQty: number ;
    discount: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ productId, productQty }) => {

    const [loading, setLoading] = useState(false)

    const addToCartClicked = async () => {
        setLoading(true)
        addOrUpdateProductToCart(productId, productQty)
        setLoading(false)
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
