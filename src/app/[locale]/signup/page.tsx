'use client'
import React, { useState, useEffect, FormEvent, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdVerified } from "react-icons/md";
import { BsApple, BsGoogle } from "react-icons/bs";
import { useScopedI18n } from '@/locales/client'
import Image from "next/image";
import Alert from "@/components/Alert";
import { useUser } from "@/context/UserContext/UserState";

function Signup() {
  const router = useRouter()
  const t: any = useScopedI18n("signupConverts")



  // ----------


  const [email, setEmail] = useState<string>("")
  const [companyName, setCompanyName] = useState<string>("")
  const [surName, setSurName] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [nip, setNip] = useState<number>()

  // ----------

  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  // ----------


  const [city, setCity] = useState<string>("")
  const [postCode, setPostCode] = useState<string>("")
  const [street, setStreet] = useState<string>("")
  const [buidlingNumber, setBuidlingNumber] = useState<string>("")
  const [apartmentNumber, setApartmentNumber] = useState<string>("")



  // ---------

  const [response, setResponse] = useState<string>("")
  const [loginLoading, setLoginLoading] = useState<boolean>(false)
  const [validationErrors, setValidationErrors] = useState<any>({})



  const handleValidationErrorChange = (propertyName: keyof any, value: any) => {
    setValidationErrors((prevState: any) => ({
      ...prevState,
      [propertyName]: value
    }));
  };


  // Auth Token Getter 

  const {authToken} = useUser()

  const signupfunc = async (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginLoading(true)
    let response = await fetch(`${process.env.API_URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        company_name: companyName,
        nip: nip,
        name: name,
        surname: surName,
        phone: phone,
        city: city,
        post_code: postCode,
        street: street,
        street_number: buidlingNumber,
        apartment_number: apartmentNumber
      })
    });
    if (response.status === 201) {
      setLoginLoading(false)
      router.push("/login")
    } else {
      const data = await response.json();
      setValidationErrors(data);
      setLoginLoading(false)
    }
  }

  useEffect(() => {
    if (authToken) {
      router.push('/')
    }
  }, [])

  return (
    <div className="mx-auto container grid md:grid-cols-2 grid-cols-1 gap-16 my-16 items-start">
      <div className="md:block hidden">
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
            <span>{t("OneClickCheckout")}</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
        <div className="my-8 flex space-x-2 items-center font-bold text-2xl">
          <span className="text-orange-400"><MdVerified /></span>
          <div className="flex flex-col">
            <span>{t("size")}</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
        <div className="my-8 flex space-x-2 items-center font-bold text-2xl">
          <span className="text-orange-400"><MdVerified /></span>
          <div className="flex flex-col">
            <span>{t("Threads")}</span>
            <span className="text-sm font-bold text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-xl p-8">
        <h1 className="text-2xl font-bold">{t("WelcomeBack")}</h1>
        <div className="flex justify-around items-center my-4 space-x-2">
          <button className="flex flex-row items-center space-x-2 border bg-transparent border-gray-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-700">
            <span><BsGoogle /></span>
            <span>{t("SignUpwithGoogle")}</span>
          </button>
          <button className="flex flex-row items-center space-x-2 border bg-transparent border-gray-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-700">
            <span><BsApple /></span>
            <span>{t("SignupwithApple")}</span>
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
        <form onSubmit={(e) => signupfunc(e)}>

          <div className="flex flex-col my-4">
            <label className="" htmlFor="email">{t("email")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="email"
              placeholder={t("EnterYourEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          {validationErrors && validationErrors.email && (
            <Alert message={validationErrors.email} onClose={() => handleValidationErrorChange('email', "")} />
          )}

          <div className="flex flex-col my-4">
            <label className="" htmlFor="password">{t("password")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="password"
              placeholder="&#8729;&#8729;&#8729;&#8729;&#8729;&#8729;&#8729;"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>


          {validationErrors && validationErrors.password && (
            <Alert message={validationErrors.password} onClose={() => handleValidationErrorChange('password', "")} />
          )}




          <hr />


          <div className="flex flex-col my-4">
            <label>{t("companyname")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourCompanyName")}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.company_name && (
            <Alert message={validationErrors.company_name} onClose={() => handleValidationErrorChange('company_name', "")} />
          )}




          <div className="flex flex-col my-4">
            <label>{t("vatnumber")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="number"
              placeholder={t("EnterYouNIP")}
              value={nip}
              // onChange={(e) => setNip(parseInt(e.target.value))}
              onChange={(e) => setNip(((/^\d{0,10}$/.test(e.target.value)) ? parseInt(e.target.value) : nip))}
            />
          </div>


          {validationErrors && validationErrors.nip && (
            <Alert message={validationErrors.nip} onClose={() => handleValidationErrorChange('nip', "")} />
          )}





          <div className="flex flex-col my-4">
            <label>{t("firstname")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourName")}
               value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.name && (
            <Alert message={validationErrors.name} onClose={() => handleValidationErrorChange('name', "")} />
          )}





          <div className="flex flex-col my-4">
            <label>{t("lastname")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourSurname")}
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.surname && (
            <Alert message={validationErrors.surname} onClose={() => handleValidationErrorChange('surname', "")} />
          )}




          <div className="flex flex-col my-4">
            <label>{t("phone")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourSurname")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.phone && (
            <Alert message={validationErrors.phone} onClose={() => handleValidationErrorChange('phone', "")} />
          )}






          <hr />


          <div className="flex flex-col my-4">
            <label>{t("city")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourCity")}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.city && (
            <Alert message={validationErrors.city} onClose={() => handleValidationErrorChange('city', "")} />
          )}







          <div className="flex flex-col my-4">
            <label>{t("postcode")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourZipCode")}
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.post_code && (
            <Alert message={validationErrors.post_code} onClose={() => handleValidationErrorChange('post_code', "")} />
          )}





          <div className="flex flex-col my-4">
            <label>{t("street")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourStreet")}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.street && (
            <Alert message={validationErrors.street} onClose={() => handleValidationErrorChange('street', "")} />
          )}




          <div className="flex flex-col my-4">
            <label>{t("streetnumber")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourBuildingNumber")}
              value={buidlingNumber}
              onChange={(e) => setBuidlingNumber(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.street_number && (
            <Alert message={validationErrors.street_number} onClose={() => handleValidationErrorChange('street_number', "")} />
          )}




          <div className="flex flex-col my-4">
            <label>{t("apartmentnumber")}</label>
            <input
              className="bg-white border border-gray-300 py-2 rounded-lg my-1 px-4"
              type="text"
              placeholder={t("EnterYourAppartment")}
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
            />
          </div>


          {validationErrors && validationErrors.apartment_number && (
            <Alert message={validationErrors.apartment_number} onClose={() => handleValidationErrorChange('apartment_number', "")} />
          )}




          <button className="text-center bg-orange-300 w-full rounded-lg py-2 hover:bg-opacity-85" onClick={(e) => signupfunc(e)} type="submit">
            {loginLoading ? (
              <div role="status">
                <svg aria-hidden="true" className="inline w-6 h-6 text-slate-700 animate-spin  fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) :
              ("Signup")
            }
          </button>
          <div className="flex flex-row my-4">
            <Link href={"/login"} className="text-center w-full py-2 hover:bg-opacity-85 bg-slate-700 text-white rounded-l-lg">
              <button type="submit">{t("Login")}</button>
            </Link>

            <Link href={"/"} className="text-center w-full py-2 hover:bg-opacity-85 bg-red-400 text-white rounded-r-lg">
              <button type="submit">{t("ForgetPassword")}</button>
            </Link>

          </div>


        </form>
      </div>

    </div>
  );
}

export default Signup;

