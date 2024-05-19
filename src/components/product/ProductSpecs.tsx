import { useScopedI18n } from "@/locales/client";
import { ProductList } from "@/types";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ProductSpecs = ({ product }: { product: ProductList | undefined }) => {
  const t: any = useScopedI18n("SingleProd");
  return (
    <div>
      <div className="border-b border-gray-200">
        <p className="text-gray-400 font-semibold space-x-2">
          <span className="text-gray-800">Id:</span>
          <span className="text-gray-600">{product?.id}</span>
        </p>
        <p className="text-gray-400 font-semibold space-x-2">
          <span className="text-gray-800">{t("Brand")}:</span>
          <span className="text-gray-600">
            {product?.brand_name ? product.brand_name : "------"}
          </span>
        </p>
        <p className="text-gray-400 font-semibold space-x-2">
          <span className="text-gray-800">{t("Tread")}:</span>
          <span className="text-gray-600">
            {product?.tread_name ? product.tread_name : "------"}
          </span>
        </p>

        <p className="text-gray-400 font-semibold space-x-2">
          <span className="text-gray-800">{t("Tread")}:</span>
          <span className="text-gray-600">
            {product?.tread_depth_min} - {product?.tread_depth_max} mm
          </span>
        </p>
        <p className="text-gray-400 font-semibold space-x-2">
          <span className="text-gray-800">{t("DataProd")}:</span>
          <span className="text-gray-600">
            {product?.dot ? product.dot : "--"}
          </span>
        </p>
      </div>

      <div className="flex items-center space-x-2">
        {product?.is_tire_bead_damaged === true && (
          <>
            <FaCircleCheck />
            <p>{t("DamagedBase")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_incised === true && (
          <>
            <FaCircleCheck />
            <p>{t("Grooved")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.front_repairs !== 0 && (
          <>
            <FaCircleCheck />
            <p>{t("NailRepair")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_side_repair === true && (
          <>
            <FaCircleCheck />
            <p>{t("SideRepair")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_visible_cracks === true && (
          <>
            <FaCircleCheck />
            <p>{t("VisibleCracks")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_braked === true && (
          <>
            <FaCircleCheck />
            <p>{t("Brake")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_braked_repair === true && (
          <>
            <FaCircleCheck />
            <p>{t("BrakeRepair")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_cosmetology === true && (
          <>
            <FaCircleCheck />
            <p>{t("Cosmetics")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_retreaded === true && (
          <>
            <FaCircleCheck />
            <p>{t("Retreaded")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_ruts === true && (
          <>
            <FaCircleCheck />
            <p>{t("Ruts")}</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {product?.is_circumventional_cut === true && (
          <>
            <FaCircleCheck />
            <p>{t("AdditionalGroove")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSpecs;
