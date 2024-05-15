'use client'

import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import AuthBtn from './AuthBtn';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import CartDrawer from './CartDrawer';
import { useUser } from '@/context/UserContext/UserState';
import { useComp } from '@/context/CompContext/CompState';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();


    const [menuIcon, setMenuIcon] = useState<boolean>(false);

    const handleMenuIcon = () => {
        setMenuIcon(!menuIcon);
    };

    const { authToken, setAuthToken, userName, setUserName, logout } = useUser()

    const  {compProductsIds} = useComp();

    const logoutUser = () => {
        logout()
        router.push('/')
    }

    // useEffect(() => {
    //     setUserName(getUserName())
    // }, [pathname])

    return (
        <div>
            <div className="flex opening__hrs__headline bg-orange-400 text-white z-50 justify-between font-serif mx-auto items-center py-1 px-4">
                <div className="hidden md:flex"></div>
                <div className="flex space-x-8 mx-auto">
                    <p>Workshop Open: Mon-Fri 8:00 - 16:00</p>
                    <p>Mobile Tire Service: 24 hours</p>
                </div>
                <div className="hidden md:flex space-x-4 text-lg cursor-pointer">
                    <Link href={"/"}><FaFacebook /></Link>
                    <Link href={"/"}><FaInstagram /></Link>
                    <Link href={"/"}><FaYoutube /></Link>
                    <Link href={"/"}><FaTwitter /></Link>
                </div>
            </div>
            <nav className="border-gray-200 bg-slate-700 h-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center md:space-x-4 lg:justify-between mx-auto p-4">
                    <Link onClick={() => menuIcon && handleMenuIcon()} href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <Image
                            src="/logo.png"
                            height={150}
                            width={150}
                            className='w-40 h-16 object-cover'
                            alt="Tirgum Logo"
                        />

                    </Link>
                    <div className="flex md:order-2 space-x-3  rtl:space-x-reverse items-center">
                        <div className='hidden md:block'>
                            <AuthBtn authToken={authToken} logoutUser={logoutUser} userName={userName} handleMenuIcon={null} />

                        </div>

                        <div className='ml-8'>

                            <CartDrawer handleMenuIcon={() => handleMenuIcon()} />
                        </div>


                        <button onClick={() => { setMenuIcon(!menuIcon) }} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-300 rounded-lg md:hidden hover:bg-none focus:outline-none focus:ring-2 focus:ring-orange-300 " aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                    </div>

                    <div className={`${(!menuIcon && "hidden")}  w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium h-screen md:h-auto flex md:items-center flex-col p-4 md:p-0 mt-4 rounded-lg bg-none md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/contact">Oferta</Link>
                            </li>
                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/about">O nas</Link>
                            </li>

                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/pricelist">Cennik</Link>
                            </li>
                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/faq">Pytania</Link>
                            </li>

                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/contact">Kontakt</Link>
                            </li>

                            {/* <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/products">Products</Link>
                            </li>
                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/products/pair">Pairs</Link>
                            </li> */}
                            <li onClick={() => menuIcon && handleMenuIcon()} className="py-2 md:py-0 md:border-none border-b border-slate-500 text-white hover:text-orange-300">
                                <Link href="/products/comparison" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white">
 
                                    Comparison
                                    {compProductsIds && compProductsIds?.length>0 && (

                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-400 border-2 border-white rounded-full -top-2 -end-2">{compProductsIds?.length}</div>
                                )}
                                </Link>

                            </li>




                            <Link onClick={() => menuIcon && handleMenuIcon()} className='bg-orange-400 text-white rounded-lg my-4 text-center md:px-2' href={"tel: 733-456-474"}>733-456-474</Link>


                            <div className='flex md:hidden mx-auto'>
                                <AuthBtn authToken={authToken} logoutUser={logoutUser} userName={userName} handleMenuIcon={handleMenuIcon} />
                            </div>


                            <div className="flex md:hidden space-x-4 text-2xl cursor-pointer my-8 justify-center text-white">
                                <Link href={"/"}><FaFacebook /></Link>
                                <Link href={"/"}><FaInstagram /></Link>
                                <Link href={"/"}><FaYoutube /></Link>
                                <Link href={"/"}><FaTwitter /></Link>
                            </div>


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar