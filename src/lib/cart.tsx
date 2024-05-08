
import { getCookie, setCookie, deleteCookie, CookieValueTypes } from 'cookies-next';


export function getCartProducts(): CookieValueTypes {
    return getCookie("cartProducts");
}


function updateCartInCookie(cart:any) {
    const cartJSON = JSON.stringify(cart);
    setCookie('cartProducts', cartJSON);
}

export function getCartProductsAsJSON(): {productId:number, quantity:number}[] {
    const cartProducts = getCartProducts();
    const stringifyProducts =  JSON.stringify(cartProducts);
    return stringifyProducts ? JSON.parse(stringifyProducts): []
}


export function addOrUpdateProductToCart(productId:number, quantity:number): void {
    let cart = getCartProductsAsJSON();

    // Ensure cart is an array
    if (!Array.isArray(cart)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cart = JSON.parse(cart);
    }

    let productExists = false;

    // Check if product already exists in cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === productId) {
            cart[i].quantity += quantity;
            productExists = true;
            break;
        }
    }

    // If product doesn't exist, add it to cart
    if (!productExists) {
        cart.push({ productId, quantity });
    }

    // Update cart in cookie
    updateCartInCookie(cart);
}



export const removeProductFromCart = (productId:number) => {
    const cart = getCartProductsAsJSON();

    // Find index of product in cart array
    const index = cart.findIndex(item => item.productId === productId);

    // If product found, remove it from cart
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartInCookie(cart);
    }
}


export function deleteCartProducts() {
    deleteCookie("cartProducts")
}