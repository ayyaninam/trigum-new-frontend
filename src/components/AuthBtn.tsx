import React from 'react'
import Link from 'next/link'
import { MdOnlinePrediction } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { AuthBtnProps } from '@/types';
import { useScopedI18n } from '@/locales/client';

const AuthBtn:React.FC<AuthBtnProps> = ({ authToken, logoutUser, userName, handleMenuIcon }) => {
    const t: any = useScopedI18n("header");

    return (
        <div className="flex gap-2">
            {authToken ? (
                <>
                    <Link href={"/profile"} className='px-4 py-2 rounded-lg border border-gray-400 text-white hover:bg-slate-600 flex flex-row items-center'>
                        <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <BiUser/>
                            <span className="sr-only">Active Profile</span>
                        </span>
                        <span className='text-white'>{userName && userName}</span>
                    </Link>

                    <button onClick={() => { logoutUser(); handleMenuIcon && handleMenuIcon() }} className='px-4 py-2 rounded-lg border border-gray-400 text-white hover:bg-slate-600'>Logout</button>

                </>
            ) : (
                <>
                    <Link href="/login">
                        <button onClick={() => (handleMenuIcon && handleMenuIcon())} className="px-4 py-2 rounded-lg border border-gray-400 text-white hover:bg-slate-600">
                            {t("Login")}
                        </button>
                    </Link>

                   
                </>
            )}

        </div>
    )
}

export default AuthBtn