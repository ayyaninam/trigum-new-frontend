import React from 'react'

const NewsLetter:React.FC = () => {
  return (
    <div className='mx-auto container bg-black text-white sm:rounded-3xl flex flex-row justify-around items-center py-16 flex-wrap space-y-4'>

        <div className='text-3xl lg:text-5xl text-center font-bold'>Subscribe to our News letter</div>
        <div>

        <input placeholder='Email' type="email" className='rounded-l-full px-4 lg:px-8 py-2 lg:py-4 text-black  lg:min-w-96 focus:outline-none focus:outline-transparent focus:outline-0' />
        <button className='bg-orange-400 text-black py-2 lg:py-4 px-4 lg:px-8 rounded-r-full'>Submit</button>
        </div>

    </div>
  )
}

export default NewsLetter