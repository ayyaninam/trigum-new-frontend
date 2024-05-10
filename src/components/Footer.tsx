import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
const Footer:React.FC = () => {  
  return (
    <div className='bg-slate-100 pt-16 rounded-t-2xl text-black border-t-4 border-orange-400 mt-8'>
    <div className='container grid gap-8 grid-cols-1 sm:grid-cols-3 px-8 sm:px-0 mx-auto'>
      <div>
        <Link href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
          src="/logo.png"
          height={150}
          width={150}
          className='w-80 h-32 object-cover'
          alt="Tirgum Logo"
          />
        </Link>
      </div>
      <div className='text-start'>
        <h1 className='cursor-pointer font-serif text-xl font-bold flex flex-row justify-start items-center space-x-2 text-start'>
          <span>Company Detail</span>
          <span><BsArrowRight /></span>
        </h1>
        <div className="my-4 ">
          <ul className='space-y-2'>
            <li className='font-serif'>
              <span className='font-bold'>Company name:</span>
              <span className='mx-2'>Tirgum Mateusz Celej</span>
            </li>
            <li className='font-serif'>
              <span className='font-bold'>Address:</span>
              <span className='mx-2'>ul. Armii Krajowej 6, 42-690 Boruszowice</span>
            </li>
            <li className='font-serif'>
              <span className='font-bold'>Phone 1:</span>
              <span className='mx-2'>733456474</span>
            </li>
            <li className='font-serif'>
              <span className='font-bold'>Phone 2:</span>
              <span className='mx-2'>794746906</span>
            </li>
            <li className='font-serif'>
              <span className='font-bold'>Email:</span>
              <span className='mx-2'>biuro.tirgum@gmail.com</span>
            </li>
            <li className='font-serif'>
              <span className='font-bold'>Working Hours:</span>
              <span className='mx-2'>pn-pt. 8:00 - 16:00</span>
            </li>
          </ul>

        </div>
      </div>
      <div className='text-start '>
        <h1 className='cursor-pointer font-serif text-xl font-bold flex flex-row justify-start items-center space-x-2 text-start'>
          <span>Links</span>
          <span><BsArrowRight /></span>
        </h1>
        <div className="my-4 ">
          <ul className='list-none space-y-2'>
            <li><Link href={"/"}>Regulamin website regulations</Link></li>
            <li><Link href={"/"}>Polityka prywatnosci Cookie privacy</Link></li>
            <li><Link href={"/"}>Reklamacie Complaints</Link></li>
            <li><Link href={"/"}>Zwroty Returns</Link></li>
            <li><Link href={"/"}>Formy platnosci Forms of payment</Link></li>
            <li><Link href={"/"}>Dostawa Delivery</Link></li>
            <li><Link href={"/"}>Kontakt Contact</Link></li>
            <li><Link href={"/"}>O nas About us</Link></li>
            <li><Link href={"/"}>Dlaczego warto u nas kupowac Why you should buy at our website</Link></li>
            <li><Link href={"/"}>Wspólpraca Cooperation</Link></li>
            <li><Link href={"/"}>mapa witryny Site map</Link></li>
            <li><Link href={"/"}>FAQ</Link></li>
            <li><Link href={"/"}>Articles</Link></li>
          </ul>

        </div>
      </div>


    </div>
    <div className='drop-shadow-2xl py-4 rounded-t-xl text-center bg-orange-300 text-black text-2xl font-serif space-x-4'>
      <span>&copy;</span>
      <span>TIRGUM 2023 All Rights Reserved</span>
    </div>
    </div>
  )
}

export default Footer