'use client'
import React, { useEffect, useState, FormEvent, ChangeEvent, useRef } from 'react'
import Image from 'next/image'

import { CookieValueTypes } from 'cookies-next'
import { UserType } from '@/types'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext/UserState'

const Profile = () => {
    const router = useRouter()

    const {authToken, userId, logout} = useUser();

    const [activeSet, setActiveSet] = useState<string>("cart")
    const [userDetails, setUserDetails] = useState<UserType>()
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")




  const [companyName, setCompanyName] = useState<string>("")
  const [surName, setSurName] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [nip, setNip] = useState<number>()


  const [city, setCity] = useState<string>("")
  const [postCode, setPostCode] = useState<string>("")
  const [street, setStreet] = useState<string>("")
  const [buidlingNumber, setBuidlingNumber] = useState<string>("")
  const [apartmentNumber, setApartmentNumber] = useState<string>("")





    const [orignalEmail, setOrignalEmail] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [imageSrc, setImageSrc] = useState<string>("/userpp.jpeg");
    const [file, setFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setloading] = useState(false)



    const gettedUserId = userId
    const gettedAuthToken = authToken

    const fetchUserDetails = async (userID: CookieValueTypes, authToken: CookieValueTypes) => {
        let response = await fetch(`${process.env.API_URL}/api/users/${userID}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${authToken}`
            },
        });

        if (!response.ok) {
            router.push("/")
        }

        const data: UserType = await response.json()
        setUserDetails(data)
        setEmail(data?.email ? data?.email : "")
        setPhone(data?.phone ? data?.phone : "")

        setCompanyName(data?.company_name ? data?.company_name : "")
        setSurName(data?.surname ? data?.surname : "")
        setName(data?.name ? data?.name : "")
        setNip(data?.nip && data?.nip)
        setCity(data?.city ? data?.city : "")
        setPostCode(data?.post_code ? data?.post_code : "")
        setStreet(data?.street ? data?.street : "")
        setBuidlingNumber(data?.street_number ? data?.street_number : "")
        setApartmentNumber(data?.apartment_number ? data?.apartment_number : "")


        // ---------
        setOrignalEmail(data?.email ? data?.email : "")
        // ---------
        setImageSrc(data?.profile_picture ? data?.profile_picture : imageSrc)
    };

    const updateUserDetails = async (userID: CookieValueTypes, authToken: CookieValueTypes, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true)
        const formData = new FormData();

        if (file) {
            formData.append('profile_picture', file);
        }

        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('company_name', companyName)
        formData.append('surname', surName)
        formData.append('name', name)
        formData.append('nip', nip?nip?.toString():"")
        formData.append('city', city)
        formData.append('post_code', postCode)
        formData.append('street', street)
        formData.append('street_number', buidlingNumber)
        formData.append('apartment_number', apartmentNumber)
        
        const response = await fetch(`${process.env.API_URL}/api/users/${userID}/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Token ${authToken}`
            },
            body: formData
        });
        setloading(false)

        if (!response.ok) {
            setError(true);
        } else {
            fetchUserDetails(gettedUserId, gettedAuthToken);
            if (orignalEmail !== email) {
                logout();
                router.push("/");
            }
        }
    };



    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (!uploadedFile) return;

        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(uploadedFile);
        setFile(uploadedFile);
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };



    useEffect(() => {
        fetchUserDetails(gettedUserId, gettedAuthToken)
    }, [])

    return (
        <div className='mx-auto container grid grid-cols-5 gap-8 my-16'>
            <form className='space-y-16 col-span-2' onSubmit={(e) => (updateUserDetails(gettedUserId, gettedAuthToken, e))}>

                <div className='py-8 flex flex-col justify-center items-center
         bg-slate-700 rounded-t-3xl'>
                    <Image
                        src={imageSrc}
                        width={200}
                        height={200}
                        loader={() => imageSrc}
                        alt="user profile picture"
                        className='rounded-full mt-8 mb-2 border-2 border-white w-52 h-52 object-cover cursor-pointer'
                        onClick={() => handleImageClick()}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        className='bg-white px-4 py-1'
                    />

                    <span className='text-white font-extrabold my-2 text-3xl'>{userDetails?.name || userDetails?.surname && userDetails?.surname.toUpperCase()}</span>
                </div>
                <div className=' py-16 flex flex-col items-start bg-slate-700 rounded-b-3xl'>
                    <div className='w-4/5 mx-auto space-y-8'>

                        {error && (
                            <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div className="ms-3 text-sm font-medium">{"Something wrong in your request."}</div>
                                <button onClick={() => setError(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Email:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <small className='text-gray-400'>Note: Changing Email will change your login credentials, You will be Logout Immediately after changing Email.</small>

                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Phone:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>


                        <hr className='border-gray-600' />


                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Company Name:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>







                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Name:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Surname:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={surName} onChange={(e) => setSurName(e.target.value)} />
                        </div>



                        <hr className='border-gray-600' />


                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>NIP:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={nip}
                            onChange={(e) => setNip(((/^\d{0,10}$/.test(e.target.value)) ? parseInt(e.target.value) : nip))}
                            />
                        </div>





                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>City:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>




                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>ZIP Code:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                        </div>

                        <hr className='border-gray-600' />




                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Street:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>




                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Building Number:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={buidlingNumber} onChange={(e) => setBuidlingNumber(e.target.value)} />
                        </div>




                        <div className='grid grid-cols-4 gap-4 items-center'>
                            <label className='text-white text-xl'>Apartment Number:</label>
                            <input className='rounded-full px-4 py-1 w-full col-span-3 h-fit' type="text" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)} />
                        </div>


                        <button type='submit' className='bg-orange-400 rounded-full px-4 py-2 font-bold text-white w-full'>
                            {loading ? (
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-6 h-6 text-slate-700 animate-spin  fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) :
                                ("Submit")
                            }
                        </button>

                    </div>
                </div>
            </form>

            <div className='col-span-3 space-y-4'>
                <div className='bg-slate-700 rounded-full py-2 flex justify-around items-center'>
                    <button onClick={() => setActiveSet("cart")} className={`cursor-pointer ${activeSet === "cart" ? "bg-white" : "text-white"} px-4 py-1 rounded-full`}>Orders</button>
                    <button onClick={() => setActiveSet("orders")} className={`cursor-pointer ${activeSet === "orders" ? "bg-white" : "text-white"} px-4 py-1 rounded-full`}>Cart</button>
                    <button onClick={() => setActiveSet("wishlist")} className={`cursor-pointer ${activeSet === "wishlist" ? "bg-white" : "text-white"} px-4 py-1 rounded-full`}>Wishlist</button>
                </div>
                <div className='border-2 border-black py-8 rounded-2xl'>


                    <div className="relative overflow-x-auto">
                        <table className="w-4/5 text-sm text-left rtl:text-right text-gray-500 mx-auto">
                            {activeSet === "cart" && (

                                <thead className="text-xs text-gray-700 uppercase ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Order Date
                                        </th>

                                    </tr>
                                </thead>
                            )}
                            {((activeSet === "orders") || (activeSet === "wishlist")) && (

                                <thead className="text-xs text-gray-700 uppercase ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Cost
                                        </th>

                                    </tr>
                                </thead>

                            )}




                            <tbody >
                                <tr className='border-b'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <Image
                                            src="/kwadracik.jpg"
                                            width={50}
                                            height={50}
                                            alt="user profile picture"
                                            className='rounded-lg'
                                        />
                                    </th>
                                    <td className="px-6 py-4 underline decoration-orange-400 text-orange-400 cursor-pointer">
                                        #100013
                                    </td>
                                    <td className="px-6 py-4">
                                        23 Dec 2023
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile