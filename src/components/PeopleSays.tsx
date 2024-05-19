"use client"
import { useScopedI18n } from '@/locales/client';
import React from 'react'

const PeopleSays:React.FC = () => {
    const t: any = useScopedI18n("SmallConverts")
  

  return (
    <div className='container mx-auto'>
        <h1 className='text-start sm:text-center text-5xl text-mono font-bold decoration-orange-400 underline sm:mx-0 mx-8'>{t("WhatPeopleSay")}</h1>
        <div className="all_says mt-8 grid gap-6 grid-cols-1 md:grid-cols-3 sm:mx-20 mx-8">
            <div className="space-y-2 hover:border-2  hover:border-orange-400 rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className='underline underline-offset-4 font-serif sm:text-2xl text-4xl decoration-orange-400 '>01</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sunt, ab quas consequuntur quasi ipsa sint sequi ratione aut dolor doloremque commodi, praesentium vel dolorem aliquam. Eum aperiam placeat voluptate?</p>
            </div>
            <div className="space-y-2 hover:border-2 hover:border-orange-400 rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className='underline underline-offset-4 font-serif sm:text-2xl text-4xl decoration-orange-400'>02</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sunt, ab quas consequuntur quasi ipsa sint sequi ratione aut dolor doloremque commodi, praesentium vel dolorem aliquam. Eum aperiam placeat voluptate?</p>
            </div>
            <div className="space-y-2 hover:border-2 hover:border-orange-400 rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className='underline underline-offset-4 font-serif sm:text-2xl text-4xl decoration-orange-400'>03</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sunt, ab quas consequuntur quasi ipsa sint sequi ratione aut dolor doloremque commodi, praesentium vel dolorem aliquam. Eum aperiam placeat voluptate?</p>
            </div>
        </div>
    </div>
  )
}

export default PeopleSays