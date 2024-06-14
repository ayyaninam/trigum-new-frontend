"use client";
import { useScopedI18n } from "@/locales/client";

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
          <p className="mt-4">{t("sellerAdmin")}</p>
          <p className="mt-4">{t("shop")}</p>
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
          <h2 className="text-center text-2xl font-bold">
            {t("generalProvisions")}
          </h2>
          <p className="mt-4">1-{t("rule1")}</p>
          <p className="mt-4">2-{t("rule2")}</p>
          <p className="mt-4">3-{t("rule3")}</p>
          <p className="mt-4">4-{t("rule4")}</p>
          <p className="mt-4">5-{t("rule5")}</p>
          <p className="mt-4">6-{t("rule6")}</p>
          <h2 className="text-center text-2xl font-bold mt-4">
            {t("saleConditions")}
          </h2>
          <p className="mt-4">1 - {t("saleCondition1")}</p>
          <p className="mt-4">2 - {t("saleCondition2")}</p>
          <h2 className="text-center text-2xl font-bold mt-4">
            {" "}
            {t("orderPlacement")}
          </h2>
          <p className="mt-4">{t("orderOnline")}</p>
          <ul>
            <li className="mt-4">{t("orderStep1")}</li>
            <ul>
              <li className="mt-4">{t("orderStep1a")}</li>
              <li className="mt-4">{t("orderStep1b")}</li>
              <li className="mt-4">{t("orderStep1c")}</li>
              <li className="mt-4">{t("orderStep1d")}</li>
              <li className="mt-4">{t("orderStep1e")}</li>
            </ul>
            <li className="mt-4">{t("orderPhone")}</li>
            <p className="mt-4">{t("orderPhoneDetails")}</p>
            <li className="mt-4">{t("orderEmail")}</li>
          </ul>
          <p className="mt-4"> {t("orderAgreement")}</p>
          <p className="mt-4">{t("orderConfirmation")}</p>
          <p className="mt-4">{t("orderModification")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("withdrawalAndReturn")}
          </h2>
          <p className="mt-4">{t("consumerRights")}</p>
          <p className="mt-4">{t("withdrawalPeriod")}</p>

          <p className="mt-4">{t("returnCosts")}</p>
          <p className="mt-4">{t("packaging")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("manufacture")}
          </h2>
          <p className="mt-4">{t("warrantyManufacturer")}</p>
          <p className="mt-4">{t("warrantySeller")}</p>
          <p className="mt-4">{t("usedTireGuarantee")}</p>
          <p className="mt-4">{t("sellerResponsibility")}</p>
          <p className="mt-4">{t("buyerClaims")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">{t("title")}</h2>
          <p className="mt-4">{t("content")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">{t("title8")}</h2>
          <p className="mt-4">{t("content8")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">{t("title9")}</h2>
          <p className="mt-4">{t("sposobyPlatnosciTitle")}</p>
          <ul className="">
            <li>{t("sposobyPlatnosci1")}</li>
            <li>{t("sposobyPlatnosci2")}</li>
            <li>{t("sposobyPlatnosci3")}</li>
            <li>{t("sposobyPlatnosci4")}</li>
          </ul>
          <p className="mt-4">{t("sposobyPlatnosci2Desc")}</p>
          <p className="mt-4">{t("terminyPlatnosciTitle")}</p>
          <ul>
            <li>{t("terminyPlatnosci1")}</li>
            <li>{t("terminyPlatnosci2")}</li>
          </ul>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title10")}
          </h2>
          {/*  */}
          <p className="mt-4">{t("punkt1")}</p>
          <p className="mt-4">{t("punkt2")}</p>
          <p className="mt-4">{t("punkt3")}</p>
          <ul>
            <li>{t("dostawa1")}</li>
            <li>{t("dostawa2")}</li>
          </ul>
          <p className="mt-4">{t("punkt4")}</p>
          <p>{t("adres")}</p>
          <p className="mt-4">{t("terminDostawy")}</p>
          <p>{t("obliczeniaTerminu")}</p>
          <p>{t("sposobPlatnosci")}</p>

          {/* 11  */}
          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title11")}
          </h2>
          <p className="mt-4">{t("punkt11")}</p>
          <p className="mt-4">{t("punkt12")}</p>
          <p className="mt-4">{t("punkt13")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("titlePolish")}
          </h2>
          <p className="mt-4">{t("description12")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title14")}
          </h2>
          <p className="mt-4">{t("content14")}</p>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title15")}
          </h2>
          <p className="mt-4">{t("p15")}</p>
          <ul>
            <li className="">{t("p152")}</li>
            <a href="">biuro.tirgum@gmail.com</a>
          </ul>

          <h2 className="text-center text-2xl font-bold mt-4">
            {t("electronicServicesComplaints")}
          </h2>
          <p className="mt-4">{t("electronicServicesComplaintsDescription")}</p>
          <p className="mt-4">{t("complaintsInWriting")}</p>
          <p className="mt-4">{t("complaintsEmailAddress")}</p>
          <p className="mt-4">{t("address")}</p>
          <p className="mt-4">{t("emailAddress")}</p>
          <p className="mt-4">{t("recommendedDescription")}</p>

          {/* 16 */}
          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title16")}
          </h2>
          <p className="mt-4">{t("content16")}</p>
          <p className="mt-4">{t("content162")}</p>
          <p className="mt-4">{t("content163")}</p>
          <p className="mt-4">{t("content164")}</p>

          {/* 16 */}
          <h2 className="text-center text-2xl font-bold mt-4">
            {t("title17")}
          </h2>
          <p className="mt-4">{t("content17")}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;