'use client'
import React, { useEffect, useState, FormEvent, ChangeEvent, useRef } from 'react'
import Image from 'next/image'

import { CookieValueTypes } from 'cookies-next'
import { UserType } from '@/types'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext/UserState'
import { useCart } from '@/context/CartContext/CartState'
import CartTable from '@/components/CartTable'
import ProductModal from '@/components/profile/ProductModal'
import AddressModal from '@/components/profile/AddressModal'
import FloatingInput from '@/components/FloatingInput'
import { useScopedI18n } from '@/locales/client'

const Profile = () => {
    const router = useRouter()
  const t: any = useScopedI18n("ProfileConvert")


    const { authToken, userId, logout } = useUser();

    const { cartProducts } = useCart()

    const [activeSet, setActiveSet] = useState<string>("cart")
    const [userDetails, setUserDetails] = useState<UserType>()
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")




    const [companyName, setCompanyName] = useState<string>("")
    const [surName, setSurName] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [nip, setNip] = useState<number | undefined>()


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
        formData.append('nip', nip ? nip?.toString() : "")
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



    const nipValueSetter = (valueToSet:string) =>{
        valueToSet ? setNip(((/^\d{0,10}$/.test(valueToSet)) ? parseInt(valueToSet) : nip)): setNip(undefined)
    }

    useEffect(() => {
        fetchUserDetails(gettedUserId, gettedAuthToken)
    }, [])

    return (
        <div className='mx-auto container grid grid-cols-5 gap-8 my-16'>
            <form className='space-y-16 col-span-2' onSubmit={(e) => (updateUserDetails(gettedUserId, gettedAuthToken, e))}>

                <div className='py-8 flex flex-col justify-center items-center
         bg-slate-700 rounded-t-xl'>
                    <Image
                        src={imageSrc}
                        width={200}
                        height={200}
                        loader={() => imageSrc}
                        alt="user profile picture"
                        className='rounded-full mt-8 mb-2 border-2 border-white w-36 h-36 object-cover cursor-pointer'
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
                <div className=' py-16 flex flex-col items-start bg-slate-700 rounded-b-xl'>
                    <div className='w-4/5 mx-auto space-y-8'>

                        {error && (
                            <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">{t("Info")}</span>
                                <div className="ms-3 text-sm font-medium">{"Something wrong in your request."}</div>
                                <button onClick={() => setError(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
                                    <span className="sr-only">{t("Close")}</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <FloatingInput value={email} valueSetter={setEmail} inputPlaceHolder={t("email")} inputType='email' />


                        <small className='text-gray-400'>Note: {t("Note")}</small>

                        <FloatingInput value={phone} valueSetter={setPhone} inputPlaceHolder={t("PhoneNumber")} inputType='text' />



                        <hr className='border-gray-600' />



                        <FloatingInput value={companyName} valueSetter={setCompanyName} inputPlaceHolder={t("companyname")}inputType='text' />
                        <FloatingInput value={name} valueSetter={setName} inputPlaceHolder={t("firstname")} inputType='text' />
                        <FloatingInput value={surName} valueSetter={setSurName} inputPlaceHolder={t("lastname")} inputType='text' />



                        <hr className='border-gray-600' />


                        <FloatingInput value={nip} valueSetter={nipValueSetter} inputPlaceHolder={t("vatnumber")} inputType='number' />



                        <FloatingInput value={city} valueSetter={setCity} inputPlaceHolder={t("city")} inputType='text' />


                        <FloatingInput value={postCode} valueSetter={setPostCode} inputPlaceHolder={t("vatnumber")} inputType='text' />


                        <hr className='border-gray-600' />




                        <FloatingInput value={street} valueSetter={setStreet} inputPlaceHolder={t("street")} inputType='text' />

                        <FloatingInput value={buidlingNumber} valueSetter={setBuidlingNumber} inputPlaceHolder={t("streetnumber")} inputType='text' />

                        <FloatingInput value={apartmentNumber} valueSetter={setApartmentNumber} inputPlaceHolder={t("apartmentnumber")} inputType='text' />





                        <button type='submit' className='bg-orange-400 rounded-lg px-4 py-2 font-bold text-white w-full'>
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
                <div className='bg-slate-700 rounded-xl py-2 flex justify-around items-center'>
                    <button onClick={() => setActiveSet("orders")} className={`cursor-pointer ${activeSet === "orders" ? "bg-white" : "text-white"} px-4 py-1 rounded-lg`}>{t("OrderInvoices")}</button>
                    <button onClick={() => setActiveSet("cart")} className={`cursor-pointer ${activeSet === "cart" ? "bg-white" : "text-white"} px-4 py-1 rounded-lg`}>{t("Cart")}</button>
                    {/* <button onClick={() => setActiveSet("wishlist")} className={`cursor-pointer ${activeSet === "wishlist" ? "bg-white" : "text-white"} px-4 py-1 rounded-full`}>Wishlist</button> */}
                </div>
                <div className='border-2 border-black py-8 rounded-2xl'>


                    <div className="overflow-x-auto">

                        <div>
                            {activeSet === "cart" && (
                                <div>
                                    {cartProducts ? (


                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        {t("Image")}
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        {t("Name")}
                                                    </th>

                                                    <th scope="col" className="px-6 py-3">
                                                        {t("Action")}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts?.results?.map((product) => (
                                                    <CartTable
                                                        key={product?.id}
                                                        img={product?.image_urls[0]}
                                                        name={`${product?.brand_name} ${product?.tread_name} ${product?.size_text}`}
                                                        price={product?.net_price}
                                                        id={product?.id}
                                                    // updateCartTotal={updateCartTotal}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className='space-y-2'>
                                            <div className='px-4 text-xl font-bold'>{t("CartProducts")}</div>
                                            <hr />
                                            <button className='bg-red-200 text-red-800 rounded-lg px-4 py-2 mx-auto flex my-8'>
                                                {t("NoProductsFound")}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div>
                            {activeSet === "orders" && (
                                <div>
                                    {cartProducts ? (


                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                       {t("OrderID")}
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                       {t("Products")}
                                                    </th>

                                                    <th scope="col" className="px-6 py-3">
                                                        {t("Address")}
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                       {t("Invoice")}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        #100003
                                                    </th>

                                                    <th className="px-6 py-4">
                                                        <ProductModal/>
                                                    </th>
                                                    <th className="px-6 py-4">
                                                        <AddressModal/>
                                                    </th>
                                                    <th className="px-6 py-4">
                                                        <button className='bg-orange-400 rounded-lg px-4 py-2 text-white'>{t("Download")}</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className='space-y-2'>
                                            <div className='px-4 text-xl font-bold'>{t("OrderInvoices")}</div>
                                            <hr />
                                            <button className='bg-red-200 text-red-800 rounded-lg px-4 py-2 mx-auto flex my-8'>
                                                {t("NoProductsFound")}.</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile