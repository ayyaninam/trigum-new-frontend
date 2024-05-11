'use client'
import React, { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext/CartState'

import CartTable from '@/components/CartTable'
import { getCartProductQuantity } from '@/lib/cart'


const CartPage = () => {


  const {cartProducts, cartLoading } = useCart()
  const [cartTotal, setCartTotal] = useState<number>(0)

  const updateCartTotal = () => {
    if (cartProducts) {

      const cartTotalCal = cartProducts?.results.reduce((total, product) => total + (product?.net_price * getCartProductQuantity(product?.id)), 0);

      if (cartTotalCal) {
        setCartTotal(cartTotalCal)
      }

    }
  }
  useEffect(() => {
    updateCartTotal();
  }, [cartProducts])


  return (
    <div className='rounded-lg bg-slate-50 p-4 my-16 container mx-auto'>
      <div className='flex justify-between items-center text-5xl font-bold rounded-md px-4 py-4'>
        <div>Cart</div>
        <div className='text-sm'>Total Products {cartProducts?.results && cartProducts?.results?.length}</div>
      </div>
      <div className='divide-y divide-gray-100 text-black overflow-auto'>


        <div className="relative overflow-x-auto">

          {!cartLoading ? cartProducts && cartProducts?.results && cartProducts?.results?.length > 0 ? (


            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.results?.map((product) => (
                  <CartTable
                    key={product?.id}
                    img={product?.image_urls[0]}
                    name={`${product?.brand_name} ${product?.tread_name} ${product?.size_text}`}
                    price={product?.net_price}
                    id={product?.id}
                    updateCartTotal={updateCartTotal}

                  />
                ))}
              </tbody>
            </table>

          ) : (
            <div className='flex justify-center items-center bg-red-200 text-red-800 w-fit mx-auto px-4 py-2 rounded-lg'>
              No Products in Cart
            </div>
          ) : (
            <div className='flex justify-center items-center bg-slate-50 text-green-800 w-fit mx-auto px-4 py-2 rounded-lg'>

              <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-slate-100 animate-spin fill-green-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>

              <div className='text-3xl animate-pulse font-bold mx-2'>Loading...</div>

            </div>
          )}

        </div>

        {!cartLoading && cartProducts && cartProducts?.results && cartProducts?.results?.length > 0 && (
          <div className='my-8'>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 my-8'>
              <div></div>
              <div className=''>
                <div className='text-3xl font-bold bg-white px-4 rounded-lg'>Totals</div>
                <div className='text-2xl font-bold px-4 rounded-lg my-4 text-slate-400 text-center'>Cart</div>
                <div className='flex justify-between items-center px-4 py-2 bg-orange-100 font-bold rounded-lg'>
                  <div>Cart Total</div>
                  <div>{cartTotal ? `${cartTotal} zł` : "NOT AVAILABLE"}</div>
                </div>

                <div className='text-2xl font-bold px-4 rounded-lg my-4 text-slate-400 text-center'>
                  <div>Shipping</div>
                  <small className='text-center text-sm'>Alternative shipping methods can be chosen during checkout</small>
                </div>

                <div className='flex justify-between items-center px-4 py-2 bg-orange-100 font-bold rounded-lg'>
                  <div>7 Days Delivery</div>
                  <div>100 zł</div>
                </div>

                <div className='text-2xl font-bold px-4 rounded-lg my-4 text-slate-400 text-center'>
                  <div>Total</div>
                </div>

                <div className='flex justify-center items-center px-4 py-2 font-bold text-white rounded-lg text-4xl text-center italic bg-gradient-to-r from-slate-50 via-orange-300 to-slate-50'>
                  <div>{cartTotal ? `${cartTotal + 100} zł` : "NOT AVAILABLE"}</div>
                </div>

                <button className='bg-orange-400 font-bold text-white rounded-lg px-4 py-2 my-8 float-end'>
                  Proceed to Checkout
                </button>


              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartPage