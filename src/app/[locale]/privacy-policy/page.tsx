"use client";
import { useScopedI18n } from "@/locales/client";
import { getScopedI18n } from "@/locales/server";
import React from "react";

const PrivacyPolicy = () => {
  const t: any = useScopedI18n("privacyPolicy");
  return (
    <div className="mx-auto container my-16">
      <div className="py-8 bg-gradient-to-r from-transparent via-orange-400 to-transparent">
        <div className="text-center font-bold text-3xl lg:text-5xl  text-white">
          Privacy Policy
        </div>
      </div>
      <div className="container mx-auto my-16 p-3 flex flex-col gap-10">
        <div>
          <p className="mt-4">
            {t("sellerAdmin")}
          </p>
          <p className="mt-4">
           {t("shop")}
          </p>
          <p className="mt-4">{t("client")}</p>
          <p className="mt-4">{t("consumer")}</p>
          <p className="mt-4">{t("entrepreneur")}</p>
          <p className="mt-4">{t("treadDepth")}</p>
          <p className="mt-4">{t("businessDay")}</p>
          <p className="mt-4">{t("account")}</p>
          <p className="mt-4">{t("registrationForm")}</p>
          <p className="mt-4">{t("termsAndConditions")}</p>
          <p className="mt-4">{t("order")}</p>
          <p className="mt-4">{t("orderForm")}</p>
          <p className="mt-4">{t("product")}</p>
          <p className="mt-4">{t("cart")}</p>
          <p className="mt-4">{t("salesContract")}</p>
          <p className="mt-4">{t("gdpr")}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
