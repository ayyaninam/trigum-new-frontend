
import Faqs from "@/components/Faqs";
import NewsLetter from "@/components/NewsLetter";
import PeopleSays from "@/components/PeopleSays";
import SearchBox from "@/components/SearchBox";
import SuccessStory from "@/components/SuccessStory";

import { getUserName } from "@/lib/session";
import { fetchAllBrands, fetchAllSizes } from "@/processor/custom";
import { AllBrandsType, AllSizesType } from "@/types";

const Home:React.FC = async  () => {

  const allBrands:AllBrandsType[] = await fetchAllBrands()
  const allSizes:AllSizesType[] = await fetchAllSizes()
  return (
    <>
    <SearchBox size={""} brands={""} issteel={false} isdrive={false} istrailer={false} isretreaded={false} allBrands={allBrands} allSizes={allSizes} ispair={false} advance={false} isincised={false} />

    <div className="my-16">
      <SuccessStory/>
      </div>

    <div className="my-16">
      <PeopleSays/>
      </div>

     <div className="my-16">
      <NewsLetter/>
      </div>



    </>
  );
}


export default Home;