'use client'
import BreadCrumb from '@/components/BreadCrumb'
import CartLeft from '@/components/cart/CartLeft'
import CheckoutRight from '@/components/checkout/CheckoutRight'
import React from 'react'

const CheckoutPage = () => {
    return (
        <>
            <BreadCrumb
                links={[
                    { name: "Home", link: "/" },
                    { name: "Cart", link: "/cart" },
                    { name: "Checkout", link: "/checkout" },
                ]}
            />
            <div className='container my-16 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto'>
                <div className='bg-gray-100 rounded-lg py-8 px-4 md:col-span-2'>
                    <h1 className='text-4xl font-bold px-4 my-4 '>Please Fill up your Information:</h1>
                    <div className='p-4'>
                        <CheckoutRight />
                    </div>
                </div>
                <div className='bg-gray-100 rounded-lg py-8 px-4'>
                    <h1 className='text-2xl font-bold px-4 my-4 '>Prices</h1>

                    <CartLeft />
                </div>
            </div>
        </>

    )
}

export default CheckoutPage