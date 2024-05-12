import Link from 'next/link';
import React from 'react'

const NextSVG = () => {
    return (
        <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
        </svg>
    )
}

const BreadCrumb = ({ links }: {
    links: {
        name: string;
        link?: string;
    }[],
}) => {
    return (
        <ol className="flex items-center justify-center whitespace-nowrap my-8 rounded-lg bg-gray-50 border-gray-100 border-2 w-fit mx-auto py-4 px-8 max-w-full flex-wrap">

            {links?.map((link, index) => {

                if (!(index+1 === links?.length)){

                return <li className="inline-flex items-center">

                    <Link href={link?.link ? link?.link : "/"} className="flex items-center text-sm text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-500 dark:focus:text-orange-500">
                        {link?.name}
                    </Link>

                    <NextSVG />
                </li>
                }else{
                    return <li className="inline-flex items-center">

                    <button className="flex items-center text-sm text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-500 dark:focus:text-orange-500">
                        {link?.name}
                    </button>


                </li>
                }

            })}

        </ol>

    )
}

export default BreadCrumb