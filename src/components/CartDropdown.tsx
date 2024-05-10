'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import Link from 'next/link';
import { CartProductType } from '@/types';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext/CartState';

const CartDropdown: React.FC = () => {
  const pathname = usePathname();

  const [showCart, setshowCart] = useState(false)

  const {  cartProducts, cartLoading } = useCart()

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
          {!cartLoading ? (
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
          ) : (
            <div id="dropdownNotification" className="z-20 sm:w-max w-sm max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-full md:right-0 lg:right-auto" aria-labelledby="dropdownNotificationButton">
            <div className='flex justify-center items-center bg-slate-50 text-green-800 w-fit mx-auto px-4 py-2 rounded-lg'>

              <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-slate-100 animate-spin fill-green-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>

              <div className='text-xl animate-pulse font-bold mx-2'>Loading...</div>

            </div>
            </div>
          )}

        </div>
      )}



    </div>
  );
}

export default CartDropdown;
