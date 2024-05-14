import { getCookie, setCookie, deleteCookie, CookieValueTypes } from 'cookies-next';


export const parseComparisonProducts = (inpstring: string | undefined): number[] => {
    const numbers = inpstring ? inpstring?.split(",").map(str => parseInt(str.trim(), 10)) : "";

    return numbers || []
}

export const getComparisonProducts = (): string | undefined => {
    return getCookie('comparisonProducts');
}

export const adjustInComparisonProducts = (id: number) => {
    let allCompProd = parseComparisonProducts(getComparisonProducts())
    if (allCompProd?.includes(id)) {

        allCompProd = allCompProd.filter(num => num !== id);

    } else {
        allCompProd?.push(id)
    }
    
    allCompProd = Array.from(new Set(allCompProd));

    setCookie("comparisonProducts", allCompProd?.join(","))
}

export const commaSepCompProductIds = (): string => {
    const prod = parseComparisonProducts(getComparisonProducts())
    return prod?.join(",") || ""
}

export const removeFromCompProduct = (id: number) => {
    const allCompProd = parseComparisonProducts(getComparisonProducts())
    const newProdList = allCompProd && allCompProd?.filter(num => num !== id);

    setCookie("comparisonProducts", newProdList)
}