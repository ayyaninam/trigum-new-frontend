import { useEffect, useState } from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useCart } from '@/context/CartContext/CartState';
import { addOrUpdateProductToCart, decreaseProductQuantity, removeProductFromCart } from '@/lib/cart';

const CartDrawer = ({handleMenuIcon}:{handleMenuIcon:() => void}) => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const { cartLoading, cartProducts } = useCart()

    const handleCartMobile = () =>{
        setIsOpen(!isOpen);
        handleMenuIcon()
    }

    const {fetchCartProducts} = useCart();

    const removeProductsFromCartCalled = (prodID:number) => {
        decreaseProductQuantity(prodID, 1)
        fetchCartProducts();
    }

    useEffect(() => {
        if (isOpen) { setIsOpen(false) }
    }, [pathname])

    return (
        <>
            <div className="text-center">
                <button
                    className="bg-white rounded-lg text-2xl px-4 py-2 text-black"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <CiShoppingBasket />
                </button>
            </div>
            {isOpen && (
                <div
                    id="drawer-right-example"
                    className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-700 min-w-full sm:min-w-[40rem] w-full sm:w-[40rem] text-white"
                    tabIndex={-1}
                    aria-labelledby="drawer-right-label"
                >
                    <h5 className="inline-flex items-center mb-4 text-base font-semibold text-white">
                        Cart Products
                    </h5>
                    <Link href={"/cart"} className='block my-2 border border-white rounded-lg text-center px-4 py-2 mx-auto hover:bg-orange-400 hover:border-orange-400'>Open Cart</Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-controls="drawer-right-example"
                        className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>




                    {isOpen && (
                        <div>
                            {!cartLoading ? (
                                <div>
                                    {cartProducts?.results && cartProducts?.results.length > 0 ? (
                                        <div className="relative overflow-x-auto w-full">
                                            <table className="text-sm text-left rtl:text-right text-gray-500 -400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Product Image
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {cartProducts?.results && cartProducts?.results.length>0 ? cartProducts.results?.map((product) => (
                                                        <tr className="cursor-pointer bg-white border-b rounded-lg hover:bg-gray-100">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                <Link onClick={()=>handleCartMobile()} className='' href={`/product/${product?.id}`}>
                                                                    <Image
                                                                        src={product?.image_urls[0]}
                                                                        width={50}
                                                                        height={50}
                                                                        alt="user profile picture"
                                                                        className='rounded-lg '
                                                                        loader={() => product?.image_urls[0]}
                                                                    />
                                                                </Link>
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                <Link onClick={()=>handleCartMobile()} className='' href={`/product/${product?.id}`}>
                                                                    {`${product?.brand_name} ${product?.tread_name} ${product?.size_text}`.substring(0, 30) + `...`}
                                                                </Link>
                                                            </td>
                                                            <td className="px-6 py-4 text-orange-400">
                                                                <Link onClick={()=>handleCartMobile()} className='' href={`/product/${product?.id}`}>
                                                                    {product?.net_price ? `${product?.net_price} zł` : "NOT AVAILABLE"}
                                                                </Link>
                                                            </td>
                                                            <td className="px-6 py-4 text-white">
                                                                <div onClick={(e) => removeProductsFromCartCalled(product?.id)} className='bg-orange-400 rounded-lg px-4 py-2 '>Remove</div>
                                                            </td>
                                                        </tr>

                                                    )):(
                                                        <tr className="cursor-pointer bg-white border-b rounded-lg hover:bg-gray-100">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                            No Products in Cart
                                                        </th>
                                                        </tr>
                                                    )}
                                                </tbody>

                                            </table>
                                        </div>



                                    ) : (
                                        <div className='text-red-800 w-full rounded-lg bg-red-200 px-4 py-2 text-center'>
                                            No Products in Cart
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div id="dropdownNotification" className="z-20 sm:w-max w-sm max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-full md:right-0 lg:right-auto" aria-labelledby="dropdownNotificationButton">
                                    <div className='flex justify-center items-center bg-slate-50 text-green-800 w-fit mx-auto px-4 py-2 rounded-lg'>

                                        <div role="status">
                                            <svg aria-hidden="true" className="inline w-8 h-8 text-slate-100 animate-spin fill-green-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>

                                        <div className='text-xl animate-pulse font-bold mx-2'>Loading...</div>

                                    </div>
                                </div>
                            )}

                        </div>
                    )}


                </div >
            )}
        </>
    );
};

export default CartDrawer;
