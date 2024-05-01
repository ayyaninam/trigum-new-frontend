'use client'

import React, { useState, useEffect, FormEvent, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdVerified } from "react-icons/md";
import { BsApple, BsGoogle } from "react-icons/bs";
import { getAuthToken, getUserId } from "@/lib/session";
import { setUserId, setUserName, setAuthToken } from "@/lib/session";
import Image from "next/image";

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [response, setResponse] = useState("")
  const [loginLoading, setLoginLoading] = useState(false)

  const authToken = getAuthToken()

  const login = async (event:FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginLoading(true)
    let response = await fetch(`${process.env.API_URL}/api/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    });
    let data = await response.json();
    if (response.status === 200) {

      setAuthToken(data.token)
      setUserId(data.user.id)
      setUserName(data.user.username)

      setLoginLoading(false)
      router.push("/")
      
    } else {
      setResponse("Invalid username or password. Please try again.")
      setLoginLoading(false)
    }
  }


  useEffect(() => {
    if (authToken) {
      router.push('/')
    }
  }, [authToken])



  return (
    // <div className="container max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden mb-4 mt-24">
    //   <h2 className="text-2xl uppercase font-medium  mb-1">Login</h2>
    //   <p className="text-gray-600 mb-6  text-sm">
    //     Zaloguj się jeśli jesteś powracającym użytkownikiem
    //   </p>
    //   <form onSubmit={(e) => login(e)}>
    //     <div className="space-y-4">
    //       {/* <p className="text-center bg-red-600 text-white rounded-lg py-4">{response && response}</p> */}
    //       {response && (
    //         <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
    //           <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    //           </svg>
    //           <span className="sr-only">Info</span>
    //           <div className="ms-3 text-sm font-medium">{response}</div>
    //           <button onClick={() => setResponse("")} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
    //             <span className="sr-only">Close</span>
    //             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    //               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    //             </svg>
    //           </button>
    //         </div>
    //       )}

    //       <div>
    //         <label htmlFor="username" className="text-gray-600 mb-2 block">
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           value={email}
    //           id="username"
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-600 placeholder-gray-400"
    //           placeholder="Email"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="password" className="text-gray-600 mb-2 block">
    //           Hasło
    //         </label>
    //         <input
    //           type="password"
    //           name=""
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-600 placeholder-gray-400"
    //           placeholder="Hasło"
    //         />
    //       </div>
    //     </div>
    //     {/* justify-betwen */}
    //     <div className="flex items-center justify-between mt-6">
    //       <div className="flex items-center">
    //         <input
    //           type="checkbox"
    //           id="agreement"
    //           className="text-red-500 focus:ring-0 rounded-sm cursor-pointer"
    //         />
    //         <label
    //           htmlFor="agreement"
    //           className="text-gray-600 ml-3 cursor-pointer"
    //         >
    //           Zapamiętaj mnie
    //         </label>
    //       </div>
    //       <a href="#" className="text-red-500">
    //         Zapomniałeś hasła?
    //       </a>
    //     </div>
    //     <div className="mt-4">
    //       <button
    //         type="submit"
    //         onClick={(e) => login(e)}
    //         className="block w-full py-2 text-center bg-red-600 text-white border  rounded hover:bg-transparent hover:text-black transition uppercase font-medium"
    //       >
    //         {loginLoading ? (
    //           <div role="status">
    //             <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    //               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    //             </svg>
    //             <span className="sr-only">Loading...</span>
    //           </div>
    //         ) :
    //           ("Login")
    //         }



    //       </button>
    //     </div>
    //   </form>
    //   {/* or login with facebook or google */}
    //   <div className="mt-6 flex justify-center relative">
    //     <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
    //       Lub zaloguj się za pomocą
    //     </div>
    //     <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
    //   </div>
    //   <div className="flex mt-4 gap-4">
    //     <Link
    //       href="#"
    //       className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-medium text-sm hover:bg-blue-700"
    //     >
    //       Facebook
    //     </Link>
    //     <Link
    //       href="#"
    //       className="w-1/2 py-2 text-center text-white bg-gray-700 rounded uppercase font-medium text-sm hover:bg-blue-600"
    //     >
    //       Google
    //     </Link>
    //   </div>
    //   <p className="mt-4 text-gray-600 text-center">
    //     Nie masz jeszcze konta? <a href="#" className="text-red-500">Zarejestruj się</a>
    //   </p>
    // </div>
    <div className="mx-auto container grid md:grid-cols-2 grid-cols-1 gap-16 my-16">
      <div className="my-auto md:block hidden">
        <Link href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>

          <Image
          src="/logo.png"
          height={150}
          width={150}
          className='mx-4 w-40 h-16 object-cover'
          alt="Tirgum Logo"
          />

        </Link>
        <div className="my-8 flex space-x-2 items-center font-bold text-2xl">
          <span className="text-orange-400"><MdVerified /></span>
          <div className="flex flex-col">
            <span>One Click Checkout</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
        <div className="my-8 flex space-x-2 items-center font-bold text-2xl">
          <span className="text-orange-400"><MdVerified /></span>
          <div className="flex flex-col">
            <span>More than 100 Sizes</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
        <div className="my-8 flex space-x-2 items-center font-bold text-2xl">
          <span className="text-orange-400"><MdVerified /></span>
          <div className="flex flex-col">
            <span>Different Threads</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-xl p-8">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <div className="flex justify-around items-center my-4 space-x-2">
          <button className="flex flex-row items-center space-x-2 border bg-transparent border-gray-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-700">
            <span><BsGoogle /></span>
            <span>Login with Google</span>
          </button>
          <button className="flex flex-row items-center space-x-2 border bg-transparent border-gray-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-700">
            <span><BsApple /></span>
            <span>Login with Apple</span>
          </button>


        </div>
        <div className="w-full text-center border-b-2 border-gray-300 leading-[0.25em] mt-8 mb-8 mr-0">
          <span className="bg-slate-100 px-10">or</span>
        </div>
  {response && (
            <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
              <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div className="ms-3 text-sm font-medium">{response}</div>
              <button onClick={() => setResponse("")} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          )}
        <form onSubmit={(e) => login(e)}>

        <div className="flex flex-col my-4">
          <label className="" htmlFor="username">Username</label>
          <input 
          className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4" 
          type="text" 
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="" htmlFor="password">Password</label>
          <input 
          className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4" 
          type="password" 
          placeholder="&#8729;&#8729;&#8729;&#8729;&#8729;&#8729;&#8729;"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          />
        </div>
        <button className="text-center bg-orange-300 w-full rounded-lg py-2 hover:bg-opacity-85" onClick={(e) => login(e)} type="submit">
      {loginLoading ? (
              <div role="status">
                <svg aria-hidden="true" className="inline w-6 h-6 text-slate-700 animate-spin  fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) :
              ("Login")
            }
        </button>
        <div className="flex flex-row my-4">
        <Link href={"/signup"} className="text-center w-full py-2 hover:bg-opacity-85 bg-slate-700 text-white rounded-l-lg">
        <button  type="submit">Sign up</button>
        </Link>

        <Link href={"/"} className="text-center w-full py-2 hover:bg-opacity-85 bg-red-400 text-white rounded-r-lg">
        <button type="submit">Forget password</button>
        </Link>

        </div>

        </form>
      </div>
      
    </div>
  );
}

export default Login;

