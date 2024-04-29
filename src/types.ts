export type ALUProps = {
    authToken: string | undefined;
    logoutUser: () => void;
    userName: string | undefined;
}
export type AuthBtnProps = {
    authToken: string | undefined;
    logoutUser: () => void;
    userName: string | undefined;
    handleMenuIcon: (() => void) | null;
}

export type AllBrandsType = {

    id: number;
    name: string | null;
}

export type AllSizesType = {
    id:number|null;
    size:string;
    width:number;
    profile:any;
    diameter:number;
    OFD:number;
    FW:number;
}


export type SearchBoxProps = {

    authToken: string | undefined;
    size: string;
    brands: string | null;
    issteel: boolean | string | null;
    isdrive: boolean | string | null;
    istrailer: boolean | string | null;
    isretreaded: boolean | string | null;
    allBrands: AllBrandsType[];
    allSizes: AllSizesType[];
}


