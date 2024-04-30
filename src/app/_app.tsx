import type { AppProps } from 'next/app'
import { fetchAllBrands, fetchAllSizes } from '@/processor/custom'
import { getAuthToken, getUserName, logout } from '@/lib/session'

export default async function MyApp({ Component, pageProps }: AppProps) {
    const allSizes = fetchAllSizes()
    const allBrands = fetchAllBrands()
  
    const authToken = getAuthToken()
    const userName = getUserName()

  return <Component 
    {...pageProps} 
    allSizes = {allSizes}
    allBrands = {allBrands}
    authToken = {authToken}
    userName = {userName}
    logoutUser= {logout}

  />
}