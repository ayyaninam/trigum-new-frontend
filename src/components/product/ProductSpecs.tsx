import { ProductList } from '@/types'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const ProductSpecs = ({ product }: { product: ProductList | undefined }) => {

    return (
        <div>

            <div className="border-b border-gray-200">
                <p className="text-gray-400 font-semibold space-x-2">
                    <span className="text-gray-800">Id:</span>
                    <span className="text-gray-600">{product?.id}</span>
                </p>
                <p className="text-gray-400 font-semibold space-x-2">
                    <span className="text-gray-800">Marka:</span>
                    <span className="text-gray-600">{product?.brand_name ? product.brand_name : "------"}</span>
                </p>
                <p className="text-gray-400 font-semibold space-x-2">
                    <span className="text-gray-800">Bieżnik:</span>
                    <span className="text-gray-600">{product?.tread_name ? product.tread_name : "------"}</span>
                </p>

                <p className="text-gray-400 font-semibold space-x-2">
                    <span className="text-gray-800">Głębokość bieżnika:</span>
                    <span className="text-gray-600">{product?.tread_depth_min} - {product?.tread_depth_max} mm</span>
                </p>
                <p className="text-gray-400 font-semibold space-x-2">
                    <span className="text-gray-800">Data Prod:</span>
                    <span className="text-gray-600">{product?.dot ? product.dot : "--"}</span>
                </p>
            </div>




            <div className="flex items-center space-x-2">
                {(product?.is_tire_bead_damaged === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Uszkodzona stopka</p>
                    </>
                )}

            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_incised === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Nacinana</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.front_repairs !== 0) && (
                    <>
                        <FaCircleCheck />
                        <p>Naprawa gwoździowa</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_side_repair === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Naprawa boczna</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_visible_cracks === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Widoczne pęknięcia</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_braked === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Hamulec</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_braked_repair === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Naprawa po hamulcu</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_cosmetology === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Kosmetyka</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_retreaded === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Bieżnikowana</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_ruts === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Koleiny</p>
                    </>
                )}
            </div>
            <div className="flex items-center space-x-2">
                {(product?.is_circumventional_cut === true) && (
                    <>
                        <FaCircleCheck />
                        <p>Dodatkowy rowek</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductSpecs