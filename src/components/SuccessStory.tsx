'use client'
import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import Image from 'next/image'
const SuccessStory:React.FC = () => {
    const [activeStory, setActiveStory] = useState(1)

    const getPhotoForStory = (id:number) =>{
        if (id === 1){return "/termopres.jpg"}
        else if (id === 2){return "/kwadracik.jpg"}
        else if (id === 3){return "/michelin.jpg"}
        else if (id === 4){return "/tyre_picture.jpg"}
        else{return "/termopres.jpg"}
    }

  return (
    <div className='container mx-auto'>
        <h1 className='decoration-orange-400 underline text-center text-5xl text-mono font-bold'>Our Success Stories</h1>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 my-16'>
        
        <div className="left_side order-2 lg:order-1 lg:mx-0">

            <div onClick={()=>setActiveStory(1)} className={`${(activeStory===1)&&("border-2 border-orange-400 bg-slate-100")} mini hover:scale-105 transition-all duration-300 flex md:space-x-8 p-4 my-8 rounded-2xl flex-col sm:flex-row justify-center items-center mx-4`}>
                <button className='p-4 bg-orange-400 rounded-full my-4 text-center text-white font-serif font-bold text-2xl h-fit w-fit'>01</button>
                <p className='p-4 bg-orange-200 rounded-xl cursor-pointer'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corporis expedita. Beatae, culpa? Accusamus delectus nisi quibusdam asperiores possimus voluptate hic optio? Quis, aspernatur accusantium quas commodi earum ratione recusandae!
                </p>
            </div>
            <div onClick={()=>setActiveStory(2)} className={`${(activeStory===2)&&("border-2 border-orange-400 bg-slate-100")} mini hover:scale-105 transition-all duration-300 flex md:space-x-8 p-4 my-8 rounded-2xl flex-col sm:flex-row justify-center items-center mx-4 `}>
                <button className='p-4 bg-orange-400 rounded-full my-4 text-center text-white font-serif font-bold text-2xl h-fit w-fit'>02</button>
                <p className='p-4 bg-orange-200 rounded-xl cursor-pointer'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corporis expedita. Beatae, culpa? Accusamus delectus nisi quibusdam asperiores possimus voluptate hic optio? Quis, aspernatur accusantium quas commodi earum ratione recusandae!
                </p>
            </div>
            <div onClick={()=>setActiveStory(3)} className={`${(activeStory===3)&&("border-2 border-orange-400 bg-slate-100")} mini hover:scale-105 transition-all duration-300 flex md:space-x-8 p-4 my-8 rounded-2xl flex-col sm:flex-row justify-center items-center mx-4`}>
                <button className='p-4 bg-orange-400 rounded-full my-4 text-center text-white font-serif font-bold text-2xl h-fit w-fit'>03</button>
                <p className='p-4 bg-orange-200 rounded-xl cursor-pointer'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corporis expedita. Beatae, culpa? Accusamus delectus nisi quibusdam asperiores possimus voluptate hic optio? Quis, aspernatur accusantium quas commodi earum ratione recusandae!
                </p>
            </div>
            <div onClick={()=>setActiveStory(4)} className={`${(activeStory===4)&&("border-2 border-orange-400 bg-slate-100 ")} mini hover:scale-105 transition-all duration-300 flex md:space-x-8 p-4 my-8 rounded-2xl flex-col sm:flex-row justify-center items-center mx-4`}>
                <button className='p-4 bg-orange-400 rounded-full my-4 text-center text-white font-serif font-bold text-2xl h-fit w-fit'>04</button>
                <p className='p-4 bg-orange-200 rounded-xl cursor-pointer'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corporis expedita. Beatae, culpa? Accusamus delectus nisi quibusdam asperiores possimus voluptate hic optio? Quis, aspernatur accusantium quas commodi earum ratione recusandae!
                </p>
            </div>
        </div>

        <div className="order-1 lg:order-2 right_side my-8 flex flex-col justify-center items-center">
            <Image 
            src={`${getPhotoForStory(activeStory)}`}
            alt="Success Stories Image"
            height={1000}
            width={1000}
            className='max-h-[40rem] object-cover rounded-xl'
            />

            <div className="buttons_l_r text-center my-4 space-x-4">

            <button className='hover:bg-orange-300 p-4 bg-orange-400 rounded-full text-center text-white font-serif font-bold text-2xl h-fit w-fit' onClick={()=>{setActiveStory(activeStory-1<1?4:activeStory-1)}}>
                <BiLeftArrow/>
            </button>

            <button onClick={()=>{setActiveStory(activeStory+1>4?1:activeStory+1)}} className='hover:bg-orange-300 p-4 bg-orange-400 rounded-full text-center text-white font-serif font-bold text-2xl h-fit w-fit'>
                <BiRightArrow />
            </button>
            </div>
        </div>

    </div>
    </div>

  )
}

export default SuccessStory