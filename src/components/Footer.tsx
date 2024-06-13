import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import { getScopedI18n } from "@/locales/server";

const Footer: React.FC = async () => {
  const t = await getScopedI18n("footer");

  return (
    <div className="bg-slate-100 pt-16 rounded-t-2xl text-black border-t-4 border-orange-400 mt-8">
      <div className="container grid gap-8 grid-cols-1 sm:grid-cols-3 px-8 sm:px-0 mx-auto">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              height={150}
              width={150}
              className="w-80 h-32 object-cover"
              alt="Tirgum Logo"
            />
          </Link>
        </div>
        <div className="text-start">
          <h1 className="cursor-pointer font-serif text-xl font-bold flex flex-row justify-start items-center space-x-2 text-start">
            <span>{t("companyDetailHeadline")}</span>
            <span>
              <BsArrowRight />
            </span>
          </h1>
          <div className="my-4 ">
            <ul className="space-y-2">
              <li className="font-serif">
                <span className="font-bold">{t("companyName")}:</span>
                <span className="mx-2">Tirgum Mateusz Celej</span>
              </li>
              <li className="font-serif">
                <span className="font-bold">{t("address")}:</span>
                <span className="mx-2">
                  ul. Armii Krajowej 6, 42-690 Boruszowice
                </span>
              </li>
              <li className="font-serif">
                <span className="font-bold">{t("phone1")}:</span>
                <span className="mx-2">733456474</span>
              </li>
              <li className="font-serif">
                <span className="font-bold">{t("phone2")}:</span>
                <span className="mx-2">794746906</span>
              </li>
              <li className="font-serif">
                <span className="font-bold">{t("email")}:</span>
                <span className="mx-2">biuro.tirgum@gmail.com</span>
              </li>
              <li className="font-serif">
                <span className="font-bold">{t("workingHours")}:</span>
                <span className="mx-2">pn-pt. 8:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start ">
          <h1 className="cursor-pointer font-serif text-xl font-bold flex flex-row justify-start items-center space-x-2 text-start">
            <span>{t("Links")}</span>
            <span>
              <BsArrowRight />
            </span>
          </h1>
          <div className="my-4 ">
            <ul className="list-none space-y-2">
              <li>
                <Link href={"/privacy-policy"}>{t("regulations")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("privacyPolicy")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("complaints")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("returns")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("paymentMethods")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("delivery")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("contact")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("aboutUs")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("whyBuyFromUs")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("cooperation")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("siteMap")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("faq")}</Link>
              </li>
              <li>
                <Link href={"/"}>{t("articles")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drop-shadow-2xl py-4 rounded-t-xl text-center bg-orange-300 text-black text-2xl font-serif space-x-4">
        <span>&copy;</span>
        <span>{t("reserved")}</span>
      </div>
    </div>
  );
};

export default Footer;
