import React from "react";
import SubLayout from "../client/layout";
import SearchBox from "@/components/SearchBox";
import { AllBrandsType, AllSizesType } from "@/types";
import { getUserName } from "@/lib/session";
import { fetchAllBrands, fetchAllSizes } from "@/processor/custom";
import SuccessStory from "@/components/SuccessStory";
import PeopleSays from "@/components/PeopleSays";
import NewsLetter from "@/components/NewsLetter";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const layout = async ({ children, params: { locale } }: Readonly<Props>) => {
  const allBrands: AllBrandsType[] = await fetchAllBrands();
  const allSizes: AllSizesType[] = await fetchAllSizes();

  return (
    <>
      <SubLayout params={{ locale }}>
        <SearchBox
          size={""}
          brands={""}
          issteel={false}
          isdrive={false}
          istrailer={false}
          isretreaded={false}
          allBrands={allBrands}
          allSizes={allSizes}
          ispair={false}
          advance={false}
          isincised={false}
        />
      </SubLayout>

      <div className="my-16">
        <SubLayout params={{ locale }}>
          <SuccessStory />
        </SubLayout>
      </div>

      <div className="my-16">
        <SubLayout params={{ locale }}>
          <PeopleSays />
        </SubLayout>
      </div>

      <div className="my-16">
        <SubLayout params={{ locale }}>
          <NewsLetter />
        </SubLayout>
      </div>

      {children}
    </>
  );
};

export default layout;
