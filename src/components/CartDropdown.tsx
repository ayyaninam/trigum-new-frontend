'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { getCartProductsAsJSON } from '@/lib/cart';
import Link from 'next/link';
import { getAllCartProductIds } from '@/lib/cart';
import { CartProductType } from '@/types';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext/CartState';

const CartDropdown: React.FC = () => {
  const pathname = usePathname();

  const [showCart, setshowCart] = useState(false)
  const [cartProducts, setCartProducts] = useState<CartProductType>()

  const {cartProductIds} = useCart()

  useEffect(() => {
    
    fetch(`${process.env.API_URL}/api/tyreadderapp/products/?ids=${cartProductIds}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data)
      })
  }, [cartProductIds])



  useEffect(() => {
    if (showCart) { setshowCart(false) }
  }, [pathname])

  return (
    <div className='relative'>
      <button onClick={() => setshowCart(!showCart)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="bg-white rounded-lg text-2xl px-2 py-1 text-black" type="button">

        <CiShoppingBasket />

      </button>
      {showCart && (
        <div>


          {cartProducts?.results && cartProducts?.results.length > 0 ? (

            <div id="dropdownNotification" className="z-20 sm:w-max w-sm max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-full md:right-0 lg:right-auto" aria-labelledby="dropdownNotificationButton">
              <div className="flex justify-between px-4 py-2 font-medium text-start text-gray-700 rounded-t-lg bg-gray-50">
                <div>Cart</div>
                <div className='bg-orange-400 rounded-lg text-white px-2 py-1'><Link href={"/cart"}>Open Cart</Link></div>
              </div>
              <div className="divide-y divide-gray-100 text-black h-96 max-h-96 overflow-auto">

                {cartProducts && cartProducts.results?.map((product) => (
                  <Link href={`/product/${product?.id}`}>
                    <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-4 hover:bg-gray-50 cursor-pointer my-2 py-4'>
                      <div className='col-span-3'>
                        <Image
                          src={product?.image_urls[0]}
                          width={50}
                          height={50}
                          alt="user profile picture"
                          className='rounded-lg '
                          loader={() => product?.image_urls[0]}
                        />
                      </div>
                      <div className='col-span-5'>{product?.brand_name}{product?.tread_name}{product?.size_text}</div>
                      <div className='col-span-2 text-xl font-bold font-mono text-orange-400'> {product?.net_price ? `${product?.net_price} zł` : "NOT AVAILABLE"}</div>
                    </div>
                  </Link>

                ))}


              </div>


            </div>
          ) : (
            <div id="dropdownNotification" className="z-20 sm:w-max w-sm max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-full md:right-0 lg:right-auto" aria-labelledby="dropdownNotificationButton">
              <div className='flex justify-center items-center bg-red-200 text-red-800 w-fit mx-auto px-4 py-2 rounded-lg'>No Products in Cart</div>
            </div>
          )}
        </div>
      )}


    </div>
  );
}

export default CartDropdown;
