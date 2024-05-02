import React from 'react'
import Image from 'next/image'
const Profile = () => {
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
                    <button className='cursor-pointer bg-white px-4 py-1 rounded-full'>Orders</button>
                    <button className='cursor-pointer text-white px-4 py-1 rounded-full'>Cart</button>
                    <button className='cursor-pointer text-white px-4 py-1 rounded-full'>Wishlist</button>
                </div>
                <div className='border-2 border-black py-8 rounded-2xl'>

                </div>
            </div>
        </div>
    )
}

export default Profile