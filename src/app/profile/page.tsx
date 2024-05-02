'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAuthToken, getUserId } from '@/lib/session'
import { fetchUserDetails } from '@/processor/custom'
const Profile = () => {

    const [activeSet, setActiveSet] = useState<string>("cart")

    // const gettedUserId = getUserId()
    // const gettedAuthToken = getAuthToken()

    // const userDetails = async () => await fetchUserDetails(gettedUserId, gettedAuthToken)

    // console.log(userDetails)


    return (
        <div className='mx-auto container grid grid-cols-5 gap-8 my-16'>
            <div className='space-y-16 col-span-2'>

                <div className='py-8 flex flex-col justify-center items-center
         bg-slate-700 rounded-t-3xl'>
                    <Image
                        src="/kwadracik.jpg"
                        width={200}
                        height={200}
                        alt="user profile picture"
                        className='rounded-full mt-8 mb-2'
                    />
                    <span className='text-gray-400 italic text-center text-xl'>@ayyaninam</span>
                    <span className='text-white font-extrabold my-2 text-3xl'>Ayyan Inam</span>
                </div>
                <div className=' py-16 flex flex-col items-start bg-slate-700 rounded-b-3xl'>
                    <div className='w-4/5 mx-auto space-y-8'>

                        <div className='grid grid-cols-4 gap-4'>
                            <label className='text-white text-xl'>Email:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3' type="text" />
                        </div>
                        <div className='grid grid-cols-4 gap-4'>
                            <label className='text-white text-xl'>Phone:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3' type="text" />
                        </div>
                        <div className='grid grid-cols-4 gap-4'>
                            <label className='text-white text-xl'>Username:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3' type="text" />

                        </div>

                        <small className='text-gray-400'>Note: Changing Username will change your login credentials, You will be Logout Immediately after changing Username.</small>

                        <button className='bg-orange-400 rounded-full px-4 py-2 font-bold text-white w-full'>Submit</button>

                    </div>
                </div>
            </div>

            <div className='col-span-3 space-y-4'>
                <div className='bg-slate-700 rounded-full py-2 flex justify-around items-center'>
                    <button onClick={()=>setActiveSet("cart")} className={`cursor-pointer ${activeSet==="cart"?"bg-white":"text-white"} px-4 py-1 rounded-full`}>Orders</button>
                    <button onClick={()=>setActiveSet("orders")} className={`cursor-pointer ${activeSet==="orders"?"bg-white":"text-white"} px-4 py-1 rounded-full`}>Cart</button>
                    <button onClick={()=>setActiveSet("wishlist")} className={`cursor-pointer ${activeSet==="wishlist"?"bg-white":"text-white"} px-4 py-1 rounded-full`}>Wishlist</button>
                </div>
                <div className='border-2 border-black py-8 rounded-2xl'>


                    <div className="relative overflow-x-auto">
                        <table className="w-4/5 text-sm text-left rtl:text-right text-gray-500 mx-auto">
                            {activeSet==="cart"&&(

                            <thead className="text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Order ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Order Date
                                    </th>

                                </tr>
                            </thead>
                            )}
                            {((activeSet==="orders")||(activeSet==="wishlist"))&&(

                            <thead className="text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cost
                                    </th>

                                </tr>
                            </thead>

                            )}
                            



                            <tbody >
                                <tr className='border-b'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <Image
                                            src="/kwadracik.jpg"
                                            width={50}
                                            height={50}
                                            alt="user profile picture"
                                            className='rounded-lg'
                                        />
                                    </th>
                                    <td className="px-6 py-4 underline decoration-orange-400 text-orange-400 cursor-pointer">
                                        #100013
                                    </td>
                                    <td className="px-6 py-4">
                                        23 Dec 2023
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile