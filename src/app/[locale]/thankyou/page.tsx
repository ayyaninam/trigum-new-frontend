"use client"
import React from 'react'
import Image from 'next/image'
import CartLeft from '@/components/cart/CartLeft'
import Link from 'next/link'
import { useScopedI18n } from '@/locales/client'
const ThankyouPage = () => {
    const t:any = useScopedI18n("ThankyouConverts") 
    return (
        <div className='container mx-auto border-2 border-orange-400 rounded-xl py-4 px-4 my-8 bg-gray-100'>
                <Image
                    src="/logo.png"
                    height={150}
                    width={150}
                    className='w-40 h-16 object-cover mx-auto'
                    alt="Tirgum Logo"
                />
<div className='py-4 my-8 mx-auto text-center bg-gradient-to-r from-transparent via-orange-400 to-transparent'>
    <h1 className='text-5xl font-bold text-white'>{t("ThankYou")}</h1>
    <h6>{t("forYourOrder")}</h6>
</div>
<div className='space-y-8'>
    <h1 className='text-2xl px-4 font-bold'>{t("OrderedItems")}:</h1>
    <CartLeft/>
</div>
<div className='flex justify-end items-center'>
    <div className='space-x-8 px-4 my-8'>
        <Link href={"/"} className='bg-slate-700 rounded-lg px-4 py-3 font-bold text-white'>
            {t("PrintRecipt")}</Link>
        <Link href={"/"} className='bg-orange-400 rounded-lg px-4 py-3 font-bold text-white'
        >{t("ContinueShopping")}</Link>
    </div>
</div>
        </div>
    )
}

export default ThankyouPage