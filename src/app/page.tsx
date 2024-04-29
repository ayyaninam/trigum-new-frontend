import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { getAuthToken, getUserName, logout } from "@/lib/session";
import {fetchAllBrands, fetchAllSizes} from "@/processor/custom"

export default async function Home() {
  const allSizes = await fetchAllSizes()
  const allBrands = await fetchAllBrands()
  console.log(allSizes)

  const authToken = getAuthToken()
  const userName = getUserName()
  
  
  return (
    <>
    <Navbar authToken={authToken} logoutUser={logout} userName={userName} />
    <SearchBox authToken={authToken} size={""} brands={""} issteel={false} isdrive={false} istrailer={false} isretreaded={false} allBrands={allBrands} allSizes={allSizes}/>
    </>
  );
}
