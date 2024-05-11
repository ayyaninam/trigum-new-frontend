
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
    return cartProducts ? JSON.parse(JSON.stringify(cartProducts)) : [];
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
    let cart = getCartProductsAsJSON();

    // Find index of product in cart array
    const index = cart?.findIndex(item => item.productId === productId);

    // If product found, remove it from cart
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartInCookie(cart);
    }
}


export function deleteCartProducts() {
    deleteCookie("cartProducts")
}

export const getAllCartProductIds = (): string => {
    let cartProducts = getCartProductsAsJSON();
    // Ensure cart is an array
    if (!Array.isArray(cartProducts)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cartProducts = JSON.parse(cartProducts);
    }
    const productIds = cartProducts.map(product => product.productId);
    return productIds.join(',');
}


export const getCartProductQuantity = (productId: number): number => {
    let  cartProducts = getCartProductsAsJSON();

    if (!Array.isArray(cartProducts)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cartProducts = JSON.parse(cartProducts);
    }
    // Find the product in the cart
    const product = cartProducts.find(item => item.productId === productId);
    // If product exists, return its quantity, otherwise return undefined
    return product ? product.quantity : 0;
}


export const increaseProductQuantity = (productId: number, quantityToAdd: number): void => {
    let cart = getCartProductsAsJSON();

    if (!Array.isArray(cart)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cart = JSON.parse(cart);
    }

    // Find the index of the product in the cart
    const index = cart.findIndex(item => item.productId === productId);

    // If the product is found, increase its quantity
    if (index !== -1) {
        cart[index].quantity += quantityToAdd;
    } else {
        // If the product is not found, add it to the cart
        cart.push({ productId, quantity: quantityToAdd });
    }

    // Update the cart in the cookie
    updateCartInCookie(cart);
}


export const decreaseProductQuantity = (productId: number, quantityToSubtract: number): void => {
    let cart = getCartProductsAsJSON();


    if (!Array.isArray(cart)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cart = JSON.parse(cart);
    }
    
    // Find the index of the product in the cart
    const index = cart.findIndex(item => item.productId === productId);

    // If the product is found, decrease its quantity
    if (index !== -1) {
        cart[index].quantity -= quantityToSubtract;
        // If quantity becomes zero or negative, remove the product from the cart
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }

    // Update the cart in the cookie
    updateCartInCookie(cart);
}


export const isProductInCart = (productId: number): boolean => {
    let cartProducts = getCartProductsAsJSON();

    if (!Array.isArray(cartProducts)) {
        // Assuming getCartProductsAsJSON() returns a JSON string
        cartProducts = JSON.parse(cartProducts);
    }
    
    // Check if the product with productId exists in the cart
    return cartProducts.some(item => item.productId === productId);
}