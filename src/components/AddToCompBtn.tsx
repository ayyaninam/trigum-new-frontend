import React, { useEffect, useState } from 'react'
import { adjustInComparisonProducts, commaSepCompProductIds } from "@/lib/comparison";
import { useComp } from '@/context/CompContext/CompState';
import { MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md';


const AddToCompBtn = ({productId}:{productId:number}) => {

    const {compProductsIds, setCompProductsIds} = useComp();
    const [isInComp, setIsInComp] = useState(false)


    const setCompClicked = () => {
        setCompProductsIds(productId)
        setIsInComp(!isInComp)
    }
    useEffect(() => {
        if (productId){
            setIsInComp(compProductsIds.includes(productId))
        }

    }, [productId])
    
  return (
    <button
    onClick={() => setCompClicked()}

    className={`flex ${isInComp ? "bg-green-400 hover:bg-green-500 " : "bg-orange-400 hover:bg-orange-500"} justify-center text-white text-sm font-medium rounded-lg px-5 py-2.5 text-center`}
>
    {!isInComp ?  "Add To Comp":  "Remove" }
        </button>

  )
}

export default AddToCompBtn