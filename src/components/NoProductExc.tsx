import React from 'react'

const NoProductExc = () => {
    return (
        <>
            <div className='sm:hidden lg:block'></div>
            <div className="cursor-pointer text-center mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No Product Found!</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Please try again or adjust your filters carefully.</p>
            </div>
        </>
    )
}

export default NoProductExc