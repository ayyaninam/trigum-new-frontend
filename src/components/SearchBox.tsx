"use client"
import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { useRouter } from 'next/navigation'
import { SearchBoxProps } from "@/types";

const SearchBox: React.FC<SearchBoxProps> = ({ size, brands, issteel, isdrive, istrailer, isretreaded, allBrands, allSizes, ispair }) => {

  const [allFilteredSizes, setAllFilteredSizes] = useState(allSizes)
  const [sizeInputVal, setsizeInputVal] = useState<string>("")
  const [sizePartActive, setSizePartActive] = useState<boolean>(false)
  const [activeBrands, setActiveBrands] = useState<number[]>([]);
  const [allBrandsShow, setAllBrandsShow] = useState<boolean>(false);

  // BTN FILTERS
  const [isSteel, setIsSteel] = useState<boolean>(false);
  const [isDrive, setIsDrive] = useState<boolean>(false);
  const [isTrailer, setIsTrailer] = useState<boolean>(false);
  const [isRetreaded, setIsRetreaded] = useState<boolean>(false);
  const [isPair, setIsPair] = useState<boolean>(false);

  const router = useRouter()

  function SearchBtn() {
    return (
      <button onClick={() => redirectFunc()} className={`p-2 px-4 rounded-md bg-orange-400 text-white mt-4 w-full text-center disabled:opacity-50 ${!(sizeInputVal) && ("cursor-not-allowed")}`} disabled={!(sizeInputVal)}>
        Szukaj
      </button>
    );
  }

  const redirectFunc = () => {

    const queryParams = {
      size: sizeInputVal,
      brands: activeBrands?.includes(0) ? "0" : activeBrands.join(','),
      issteel: isSteel.toString(),
      isdrive: isDrive.toString(),
      istrailer: isTrailer.toString(),
      isretreaded: isRetreaded.toString(),
      ispair: isPair.toString(),
    };

    const queryString = new URLSearchParams(queryParams).toString();

    isPair?router.push(`/products/pair?${queryString}`):router.push(`/products?${queryString}`)

  }


  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setsizeInputVal(event.target.value);
    const filtered = allSizes?.filter(item => item.size?.toLowerCase().includes(event.target.value.toLowerCase()));
    setAllFilteredSizes(filtered)
  };



  const handleSingleBrandClick = (id: number) => {
    if (activeBrands?.includes(id)) {
      setActiveBrands(activeBrands.filter((divId) => divId !== id));
    } else {
      setActiveBrands([...activeBrands, id]);
    }
  };



  useEffect(() => {
    setsizeInputVal(size);
  }, [size])

  useEffect(() => {
    setActiveBrands(brands ? brands.split(",").map(Number) : [])
  }, [brands])

  useEffect(() => {
    setIsSteel(issteel ? issteel === "true" : false);
  }, [issteel])

  useEffect(() => {
    setIsDrive(isdrive ? isdrive === "true" : false);
  }, [isdrive])

  useEffect(() => {
    setIsTrailer(istrailer ? istrailer === "true" : false);
  }, [istrailer])

  useEffect(() => {
    setIsPair(ispair ? ispair === "true" : false);
  }, [ispair])

  useEffect(() => {
    setIsRetreaded(isretreaded ? isretreaded === "true" : false);
  }, [isretreaded])

  return (
    <div className="h-max bg-cover flex items-center justify-center">


      {/* Basic */}
      <div className="relative w-full top-0">

      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-gray-200 flex flex-col space-y-2 p-4 rounded-md mx-auto my-10">

        {/* Rozmiar */}
        <div className="size__main">


          <div id="size" className="w-[100%] " >
            <div className="relative">
              <label htmlFor="size__input" className="block mb-2 text-sm font-medium text-black dark:text-black">
                <span>Choose a Size</span>
                <span className="text-red-500 mx-2">*</span>
              </label>
              <input onBlur={() => setTimeout(() => { setSizePartActive(false) }, 200)} onFocus={() => setSizePartActive(true)} value={sizeInputVal} onChange={(e) => handleSizeChange(e)} type="text" id="size__input" className="text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="385/55 R22.5" />

              <div className={`all_suggestions rounded-xl bg-slate-50 overflow-auto ${sizePartActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}  transition-opacity transition-height ease-in-out delay-150 duration-500 absolute w-full z-30`} >
                {allFilteredSizes && allFilteredSizes.map((data) => {
                  return <div key={data.id} className="hover:bg-slate-200 border-b border-slate-100 cursor-pointer w-[100%] text-black px-4 py-2 text-md" onClick={() => { setsizeInputVal(data.size), setAllFilteredSizes([]) }}>{data.size}</div>
                })}
              </div>

            </div>
          </div>
        </div>

        {/* brand Name */}
        <div id="brand_name" className="w-[100%] relative">
          <label className="mb-2 text-sm font-medium text-black dark:text-black bg-slate-50 px-4 py-2 rounded-xl cursor-pointer flex justify-between hover:bg-slate-100 items-center" onClick={() => setAllBrandsShow(!allBrandsShow)}>

            <span className="text-xl text-gray-500 font-normal">{activeBrands.length > 0 ? `${activeBrands.includes(0) ? "All Brands Selected" : `${activeBrands.length} Brand Selected`}` : "Select a Brand"}</span>

            {!allBrandsShow ? (
              <span>
                <BiDownArrowAlt />
              </span>
            ) : (
              <span>
                <BiUpArrowAlt />
              </span>
            )}


          </label>
          {allBrandsShow && (
            <div className={`rounded-xl bg-slate-50 p-4 cursor-pointer space-y-2 max-h-40 overflow-auto absolute w-full z-20`}>
              <div onClick={() => handleSingleBrandClick(0)} className={`hover:bg-slate-200 flex justify-between py-2 px-2 rounded-lg`}>
                {"All"}
                {activeBrands?.includes(0) && (
                  <span className=" inline-flex items-center justify-center w-5 h-5 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-orange-400 dark:text-white">
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </span>
                )}
              </div>
              {allBrands && allBrands.map((data) => {
                if (!activeBrands?.includes(0)) {

                  return <div key={data.id} onClick={() => handleSingleBrandClick(data.id)} className={`hover:bg-slate-200 flex justify-between py-2 px-2 rounded-lg`}>
                    {data.name}
                    {activeBrands?.includes(data.id) && (
                      <span className="inline-flex items-center justify-center w-5 h-5 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-orange-400 dark:text-white">
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                        <span className="sr-only">Icon description</span>
                      </span>
                    )}
                  </div>
                }

              })}
            </div>
          )}

        </div>

        {/* Axis */}
        <div className="w-[100%] flex flex-col space-y-2 mt-8">
          <label htmlFor="osie" className="block text-sm font-medium text-black dark:text-black">Osie</label>
          <div id="osie">
            <ul className="max-w-full w-full grid grid-cols-2 sm:grid-cols-4 items-stretch">

              <li className="flex p-1">
                <input onClick={() => setIsSteel(!isSteel)} type="checkbox" id="Sterujaca" value="" className="hidden peer" />
                <label htmlFor="Sterujaca" className={`justify-center inline-flex items-center text-center  p-5 bg-white border-2  rounded-lg cursor-pointer ${isSteel ? ("border-orange-400 text-gray-600") : ("border-gray-200 text-gray-500")} hover:text-gray-600 hover:bg-gray-50 max-w-[100%] w-[100%]`}>
                  <div className="block">
                    <div className="break-all text-xs font-semibold">Sterujaca</div>
                  </div>
                </label>
              </li>

              <li className="flex p-1">
                <input onClick={() => setIsDrive(!isDrive)} type="checkbox" id="Naped" value="" className="hidden peer" />
                <label htmlFor="Naped" className={`justify-center inline-flex items-center text-center  p-5 bg-white border-2  rounded-lg cursor-pointer ${isDrive ? ("border-orange-400 text-gray-600") : ("border-gray-200 text-gray-500")} hover:text-gray-600 hover:bg-gray-50 max-w-[100%] w-[100%]`}>
                  <div className="block">
                    <div className="break-all text-xs font-semibold">Naped</div>
                  </div>
                </label>
              </li>

              <li className="flex p-1">
                <input onClick={() => setIsTrailer(!isTrailer)} type="checkbox" id="Wleczona" value="" className="hidden peer" />
                <label htmlFor="Wleczona" className={`justify-center inline-flex items-center text-center  p-5 bg-white border-2  rounded-lg cursor-pointer ${isTrailer ? ("border-orange-400 text-gray-600") : ("border-gray-200 text-gray-500")} hover:text-gray-600 hover:bg-gray-50 max-w-[100%] w-[100%]`}>
                  <div className="block">
                    <div className="break-all text-xs font-semibold">Wleczona</div>
                  </div>
                </label>
              </li>

              <li className="flex p-1">
                <input onClick={() => setIsRetreaded(!isRetreaded)} type="checkbox" id="Bieżnikowana" value="" className="hidden peer" />
                <label htmlFor="Bieżnikowana" className={`justify-center inline-flex items-center text-center  p-5 bg-white border-2  rounded-lg cursor-pointer ${isRetreaded ? ("border-orange-400 text-gray-600") : ("border-gray-200 text-gray-500")} hover:text-gray-600 hover:bg-gray-50 max-w-[100%] w-[100%]`}>
                  <div className="block">
                    <div className="break-all text-xs font-semibold ">Bieżnikowana</div>
                  </div>
                </label>
              </li>

              <li className="flex p-1">
                <input onClick={() => setIsPair(!isPair)} type="checkbox" id="ispair" value="" className="hidden peer" />
                <label htmlFor="ispair" className={`justify-center inline-flex items-center text-center  p-5 bg-white border-2  rounded-lg cursor-pointer ${isPair ? ("border-orange-400 text-gray-600") : ("border-gray-200 text-gray-500")} hover:text-gray-600 hover:bg-gray-50 max-w-[100%] w-[100%]`}>
                  <div className="block">
                    <div className="break-all text-xs font-semibold ">Pair Tyres</div>
                  </div>
                </label>
              </li>

            </ul>
          </div>
        </div>

        <div></div>
        <SearchBtn />

      </div>
  
        <Image
            src="/termopres.jpg"
            alt="Tirgum main Image"
            width={100}
            height={100}
            unoptimized={true}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
        />

        
      </div>


    </div>
  );
}

export default SearchBox;
