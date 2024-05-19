import React, { useState, useEffect } from 'react'
import FloatingInput from '../FloatingInput'
import { UserType } from '@/types'
import { useRouter } from 'next/navigation'
import { CookieValueTypes } from 'cookies-next'
import { useUser } from '@/context/UserContext/UserState'
import Link from 'next/link'
import { useScopedI18n } from '@/locales/client'


const CheckoutRight = () => {
    const t: any = useScopedI18n("signupConverts");

    const router = useRouter()

    const {userId, authToken} = useUser();


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






    const nipValueSetter = (valueToSet:string) =>{
        valueToSet ? setNip(((/^\d{0,10}$/.test(valueToSet)) ? parseInt(valueToSet) : nip)): setNip(undefined)
    }


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

    };

    useEffect(() => {
        fetchUserDetails(userId, authToken)
    }, [])

    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
            <FloatingInput value={email} valueSetter={setEmail} inputType='email' inputPlaceHolder={t("email")}/>
            <FloatingInput value={phone} valueSetter={setPhone} inputType='phone' inputPlaceHolder={t("phone")}/>
            <FloatingInput value={name} valueSetter={setName} inputType='text' inputPlaceHolder={t("firstname")}/>
            <FloatingInput value={surName} valueSetter={setSurName} inputType='text' inputPlaceHolder={t("lastname")}/>
            <FloatingInput value={companyName} valueSetter={setCompanyName} inputType='text' inputPlaceHolder={t("companyname")}/>
            <FloatingInput value={nip} valueSetter={nipValueSetter} inputType='number' inputPlaceHolder={t("vatnumber")}/>
            <FloatingInput value={city} valueSetter={setCity} inputType='text' inputPlaceHolder={t("city")}/>
            <FloatingInput value={postCode} valueSetter={setPostCode} inputType='text' inputPlaceHolder={t("postcode")}/>
            <FloatingInput value={street} valueSetter={setStreet} inputType='text' inputPlaceHolder={t("street")}/>
            <FloatingInput value={buidlingNumber} valueSetter={setBuidlingNumber} inputType='text' inputPlaceHolder={t("streetnumber")}/>
            <FloatingInput value={apartmentNumber} valueSetter={setApartmentNumber} inputType='text' inputPlaceHolder={t("apartmentnumber")}/>
        </div>
        <Link href={"/thankyou"} className='rounded-lg px-4 py-2 bg-orange-400 font-bold text-white my-8 float-end'>{t("placeorder")}</Link>
        </>
    )
}

export default CheckoutRight