import Image from 'next/image'
import React from 'react'

const ServiceSection = ({imgleft, imgsrc, imgalt}:{imgleft:boolean, imgsrc:string, imgalt:string}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
        <div className={`${imgleft?"order-1":"order-2"}`}>
        <Image
          src={imgsrc}
          alt={`${imgalt}`}
          width={100}
          height={100}
          unoptimized={true}
          className="w-full rounded-xl"
        />
        </div>
        <div className={`${imgleft?"order-2":"order-1"} text-start space-y-8`}>
            <h1 className='text-3xl font-bold max-w-[80%]'>Wymiana Opony Ciężarowej na trasie</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatem cupiditate sed, sapiente iste exercitationem labore totam officiis reprehenderit animi pariatur eos possimus minus repellendus numquam nam sit distinctio!</p>
        </div>
    </div>
  )
}

export default ServiceSection