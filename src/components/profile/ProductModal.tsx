import React, { useState, useEffect, useRef } from 'react';
import CartTable from '../CartTable';
import { useCart } from '@/context/CartContext/CartState';
import { useScopedI18n } from '@/locales/client';
const ProductModal: React.FC = () => {
    const [show, setShow] = useState(false)
    const { cartProducts } = useCart()
    const modalRef = useRef<any>(null)
    const t:any = useScopedI18n("ProfileConvert")

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
            setShow(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [show]);

    return (
        <div>
            <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="bg-gray-200 rounded-lg px-4 py-2 text-gray-600"
                type="button"
                onClick={(e) => { setShow(!show) }}
            >
                {t("ShowProducts")}
            </button>

            {show && (
                <div ref={modalRef} id="hs-basic-modal" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 w-full fixed top-1/3 start-0 z-[80] overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
                    <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto ">
                            <div className="flex justify-between items-center py-3 px-4 border-b">
                                <h3 className="font-bold text-gray-800 ">
                                    {t("AllOrderedProducts")} 
                                </h3>
                                <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " data-hs-overlay="#hs-basic-modal" onClick={() => setShow(false)}>
                                    <span className="sr-only">Close</span>
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                {t("Name")}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {t("Price")}
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
                                                onlyWithPrice={true}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">

                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-300 disabled:opacity-50 disabled:pointer-events-none" onClick={() => setShow(false)}>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductModal;
