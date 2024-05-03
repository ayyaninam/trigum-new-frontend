

export type RootLayoutProps  = {
    children: any;
    allSizes: any; // Update the type of allSizes
    allBrands: any; // Update the type of allBrands
    authToken: string; // Update the type of authToken
    userName: string; // Update the type of userName
    logout: () => void; // Update the type of logout
  }

export type ALUProps = {
    authToken: string | undefined;
    logoutUser: () => void;
    userName: string | undefined;
}
export type AuthBtnProps = {
    authToken: string | undefined | null;
    logoutUser: () => void;
    userName: string | undefined | null;
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

    size: string;
    brands: string | null;
    issteel: boolean | string | null;
    isdrive: boolean | string | null;
    istrailer: boolean | string | null;
    isretreaded: boolean | string | null;
    allBrands: AllBrandsType[];
    allSizes: AllSizesType[];
}


export type ProductItemsProps = {
    list: ProductList[] | null,
}

export type ImageMagnifierType = {
    src:string;
    width:string;
    height:string;
    magnifierHeight:number;
    magnifieWidth:number;
    zoomLevel:number;
}

export type ProductList = {
    id: number;
    title: string;
    brand_name: string;
    tread_name: string;
    size_text: string;
    description: string;
    image_urls: string[];
    tread_details: null | string;
    created: string;
    status: string;
    is_tire_bead_damaged: boolean;
    is_incised: boolean;
    front_repairs: number;
    is_side_repair: boolean;
    is_visible_cracks: boolean;
    is_braked: boolean;
    is_braked_repair: boolean;
    is_shoulder_repair: boolean;
    is_cosmetology: boolean;
    is_toothed_out: boolean;
    is_retreaded: boolean;
    is_ruts: boolean;
    is_circumventional_cut: boolean;
    tread_depth_min: number;
    tread_depth_max: number;
    dot: number;
    net_price: number;
    supplier_price: number;
    warehouse: number;
    is_label_printed: boolean;
    set_number: null | string;
    is_allegro: boolean;
    is_otomoto: boolean;
    is_merchant_center: boolean;
    is_olx: boolean;
    is_olx_active: boolean;
    olx_advert_id: null | string;
    olx_response: null | string;
    olx_active_advert_response: null | string;
    advert_title: string;
    advert_description: string;
    brand: number;
    tread: number;
    size: number;
    pair: number;
};


export type UserType =  {
    address: string;
    date_joined: string; // Assuming this is always in ISO 8601 format
    email: string | null;
    id: number;
    is_active: boolean;
    is_approved: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string; // Assuming this is always in ISO 8601 format
    name: string | null;
    phone: string | null;
    profile_picture: string | null;
    surname: string | null;
    username: string | null;
}


