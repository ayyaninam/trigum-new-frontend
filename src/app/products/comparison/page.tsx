'use client'
import React, { useState, useEffect } from "react";
import { CartProductType, PairProductsListData } from "@/types";
import { ImageMagnifierType } from "@/types";
import Image from "next/image";
import PairAddToCartBtn from "@/components/PairAddToCartBtn";
import { getCompProductsAllIds, getPairProductsAllIds } from "@/processor/custom";
import BreadCrumb from "@/components/BreadCrumb";
import { useComp } from "@/context/CompContext/CompState";
import AddToCartBtn from "@/components/AddToCartBtn";
import AddToCompBtn from "@/components/AddToCompBtn";
import NoProductExc from "@/components/NoProductExc";

const ComparisonPage: React.FC = () => {


  const [products, setProducts] = useState<CartProductType | null>(null)
  const [productsIds, setProductsIds] = useState<string>("")
  const { compProductsIds } = useComp();

  const fetchProduct = async () => {
    console.log(`${process.env.API_URL}/api/tyreadderapp/products/?ids=${compProductsIds.join(",")}`)
    const response = await fetch(
      `${process.env.API_URL}/api/tyreadderapp/products/?ids=${compProductsIds.join(",")}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setProducts(data && data)
  };




  const handleImageClick = (productIndex: number, imageIndex: number, products: CartProductType | null): void => {
    if (!products) return; // Handle case where products is null

    const clickedImageUrl = products.results[productIndex].image_urls.splice(imageIndex, 1)[0];
    products.results[productIndex].image_urls.unshift(clickedImageUrl);

    setProducts({ ...products }); // Ensure immutability by spreading the object
  }



  function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 400,
    magnifieWidth = 400,
    zoomLevel = 1.7
  }: ImageMagnifierType) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width
        }}
      >
        <img
          src={src}
          style={{ height: height, width: width, objectFit: "cover" }}
          className="rounded-lg"
          onMouseEnter={(e) => {
            // update image size and turn-on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // close magnifier
            setShowMagnifier(false);
          }}
          alt={"img"}
        />

        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
            zIndex:"100",


            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "2px solid lightgray",
            borderRadius: "9999999px",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
              }px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  }


  useEffect(() => {
    if (compProductsIds?.length > 0) {
      fetchProduct();
    } else {
      setProducts(null)
    }
  }, [compProductsIds])


  useEffect(() => {
    if (products) {
      setProductsIds(getCompProductsAllIds(products));
    }
  }, [products])

  return (
    <>

      <BreadCrumb
        links={[
          { name: "Home", link: "/" },
          { name: "Comparison Page", link: "/" },
        ]}
      />

      {compProductsIds && compProductsIds.length > 0 && (
        <div className="container mx-auto">
          <div className="font-serif text-center text-2xl font-bold">Make Wise Decisions Through Comparing</div>

          <div className="bg-gradient-to-r from-transparent via-orange-400 to-transparent py-8 font-bold text-center  flex flex-col mb-8">
            <span className="text-black text-sm">You are comparing</span>
            <span className="text-white text-5xl">{compProductsIds?.length} Products</span>
            <span className="text-black text-sm">right now...</span>
          </div>
        </div>
      )}



      {products ?
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto px-8 sm:px-0">


          {products?.results.map((product, prod_index) => {
            return <div key={prod_index}>

              <div className="space-y-2 my-8">

                <div className='flex justify-center items-center text-xl font-bold text-center rounded-full p-2 bg-orange-400 aspect-square size-8 text-white font-serif'>{product?.tyre_class}</div>

                <h2 className="text-4xl font-bold uppercase mb-2">
                  {product?.brand_name}
                  <br />
                  <small className="text-slate-400">{product?.tread_name}</small>
                  <br />
                  {product?.size_text}
                </h2>
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


                </div>




              </div>



              <div>
                <ImageMagnifier
                  src={product && product.image_urls[0]}
                  width={"100%"}
                  height={"35rem"}
                  magnifierHeight={400}
                  magnifieWidth={400}
                  zoomLevel={1.7}
                />
                {product.image_urls &&
                  <div className={`grid grid-cols-3 gap-2 my-2`}>
                    {/* Render smaller images dynamically */}
                    {product.image_urls?.slice(1).map((image, img_index) => (
                      <Image
                        key={img_index}
                        width={100}
                        height={100}
                        loader={() => image}
                        unoptimized={true}
                        src={image}
                        onClick={() => handleImageClick(prod_index, img_index + 1, products)}
                        className="rounded-lg w-full aspect-square object-cover cursor-pointer border border-primary"
                        alt={`${product?.brand_name} ${product?.tread_name} ${product?.size_text}`}
                      />
                    ))}
                  </div>
                }
              </div>

              <div className="grid grid-cols-2 gap-8">
                <AddToCartBtn productId={product?.id} productQty={1} fullWidth={false} />
                <AddToCompBtn productId={product?.id} />

              </div>

            </div>

          })}

        </div> : (

          <NoProductExc />
        )}


      {products && (products?.results.length % 2) && (
        <div></div>
      )}




      {/* <PairAddToCartBtn productIds={productsIds} productQty={1} fullWidth={true} /> */}



      {/* Description */}

      {/* <div className="container pb-16">
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Opis produktu
                </h3>
                <div className="w-full pt-6">
                    <div className="space-y-4">
                        <p>{product?.advert_description ? product.advert_description : 'No description available'}</p>
                    </div>
                </div>
            </div>
            <div className="container pb-16">
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Porównaj z nową oponą
                </h3>
                <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                    <tbody>
                        <tr>
                            <th className="py-2 px-4 border border-gray-500 w-40 font-medium">
                                <p>
                                    Cena netto:{" "}
                                    <span className="text-black text-bold"> 415 zł</span>
                                </p>
                            </th>
                            <th className="py-2 px-4 border border-gray-500">
                                <p>
                                    Cena nowej opony netto:
                                    <span className="text-black text-bold"> 1400 zł</span>
                                </p>
                            </th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border border-gray-500 w-40 font-medium">
                                Głębokość bieżnika
                            </th>
                            <th className="py-2 px-4 border border-gray-500">
                                Głębokość bieżnika nowej opony
                            </th>
                        </tr>
                    </tbody>
                </table>
                <div className="space-y-4">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium mt-4">
                        Ogólne zasady
                    </h3>
                    <p>
                        Każda z naszych opon jest dokładnie sprawdzana ciśnieniowo oraz
                        wizualnie. Inspekcja jednej opony trwa ok 3 minuty i 30 sek.
                    </p>
                    <p>
                        Wszelkie naprawy wykonywane są zgodnie ze sztuką wulkanizacyjną z
                        zastosowaniem odpowiednich standardów oraz chemii naprawczej.
                    </p>
                    <p>Każda z naszych opon jest oznaczona etykietą.</p>
                    <p>
                        Wysyłamy opony na paletach. Możesz je również odebrać osobiście.
                        Sprawdź również naszą ofertę montażu na miejscu i mobilnie.
                    </p>
                    <p>
                        Kurierzy często się spóźniają. My dowozimy nasze opony do centrum
                        przeładunkowego, dzięi czemu opóźnienia w dostawie zdarzają się
                        niezwykle rzadko.
                    </p>
                </div>
            </div> */}


    </>

  );
}

export default ComparisonPage;
