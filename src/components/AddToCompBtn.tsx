import React, { useEffect, useState } from 'react'
import { adjustInComparisonProducts, commaSepCompProductIds } from "@/lib/comparison";
import { useComp } from '@/context/CompContext/CompState';
import { MdOutlineCompare, MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md';
import { CiSquareRemove } from 'react-icons/ci';


const AddToCompBtn = ({productId}:{productId:number|undefined}) => {

    const {compProductsIds, setCompProductsIds} = useComp();
    const [isInComp, setIsInComp] = useState(false)


    const setCompClicked = () => {
        productId && setCompProductsIds(productId)
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

    className={`flex ${isInComp ? "bg-red-400 hover:bg-red-500 " : "bg-slate-400 hover:bg-slate-500"} text-xl items-center justify-center text-white rounded-lg text-center`}
>
        {!isInComp ?  <MdOutlineCompare /> :  <CiSquareRemove /> }
    
    </button>

  )
}

export default AddToCompBtn