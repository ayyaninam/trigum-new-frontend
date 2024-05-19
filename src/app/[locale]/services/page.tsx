import ServiceSection from '@/components/services/ServiceSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ImageReturn = () =>{
    return (
        <Image
        src="/termopres.jpg"
        alt={`Tirgum Pictures`}
        width={100}
        height={100}
        unoptimized={true}
        className="h-auto w-full max-w-full rounded-lg"
    />
    )
}

const page = () => {
    return (
        <div className='my-16 container mx-auto'>
            <div className='py-8 bg-gradient-to-r from-transparent via-orange-400 to-transparent text-center font-bold text-5xl text-white'>
                <div>Our Service</div>
                <div className='text-black text-sm font-normal'>Mobilny Serwis Opon Tir 24h</div>
            </div>
            <div className='mx-auto text-center my-4 max-w-screen-sm'>
                Szybki dojazd w następujące miejsca:
                Katowice, Sosnowiec, Gliwice, Chorzów, Czeladź, Ruda Śląska, Bytom, Piekary Śląskie, Zabrze, Siemianowice Śląskie,Tarnowskie Góry, Pyskowice, Lubliniec
            </div>

            <div className='underline decoration-orange-400 text-5xl font-bold text-center my-16'>
                Tak możemy Ci pomóc:
            </div>
            <div className='my-8'>
                <ServiceSection
                    imgleft={true}
                    imgalt='Trigum Main Image'
                    imgsrc='/termopres.jpg'
                />
            </div>
            <div className='my-8'>
                <ServiceSection
                    imgleft={false}
                    imgalt='Trigum Main Image'
                    imgsrc='/termopres.jpg'
                />
            </div>
            <div className='my-8'>
                <ServiceSection
                    imgleft={true}
                    imgalt='Trigum Main Image'
                    imgsrc='/termopres.jpg'
                />
            </div>

            <div className='underline decoration-orange-400 text-5xl font-bold text-center my-16'>
                Sprawdź nasze pozostałe usługi:
            </div>

            <div className='my-8'>
                <ServiceSection
                    imgleft={false}
                    imgalt='Trigum Main Image'
                    imgsrc='/termopres.jpg'
                />
            </div>
            <div className='flex justify-center items-center my-8'>
                <Link href={"/"} className='rounded-lg px-8 py-4 text-white bg-orange-400'>
                    Search Products
                </Link>
            </div>


            <div className='underline decoration-orange-400 text-5xl font-bold text-center my-16'>
                Galeria
            </div>

<div className='columns-3 gap-2 space-y-2'>
    <ImageReturn/>
    <ImageReturn/>
    <ImageReturn/>
    <ImageReturn/>
    <ImageReturn/>
    <ImageReturn/>
</div>

        </div>
    )
}

export default page