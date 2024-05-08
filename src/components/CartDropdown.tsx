import Image from 'next/image';
import React, { useState } from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { getCartProductsAsJSON } from '@/lib/cart';

const CartDropdown: React.FC = () => {
  const [showCart, setshowCart] = useState(false)  
  console.log(getCartProductsAsJSON())
  return (
    <div className='relative'>
      <button onClick={() => setshowCart(!showCart)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="bg-white rounded-lg text-2xl px-2 py-1 text-black" type="button">

      <CiShoppingBasket/>

      </button>
      {showCart && (

        <div id="dropdownNotification" className="z-20 sm:w-max w-sm max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-full md:right-0 lg:right-auto" aria-labelledby="dropdownNotificationButton">
          <div className="block px-4 py-2 font-medium text-start text-gray-700 rounded-t-lg bg-gray-50">
            Cart
          </div>
          <div className="divide-y divide-gray-100 text-black h-96 max-h-96 overflow-auto">

            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4 '>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-0 justify-items-start px-2 hover:bg-gray-50 cursor-pointer my-2 py-4'>
              <div className='col-span-3'>
                <Image
                  src="/kwadracik.jpg"
                  width={50}
                  height={50}
                  alt="user profile picture"
                  className='rounded-lg '
                />
              </div>
              <div className='col-span-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
              <div className='col-span-2 text-xl font-bold font-mono text-orange-400'>5000</div>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default CartDropdown;
