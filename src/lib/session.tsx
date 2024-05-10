import { getCookie, setCookie, deleteCookie, CookieValueTypes } from 'cookies-next';
import { UserType } from '@/types';


export function getAuthToken(): CookieValueTypes {
    return getCookie("authToken");
}

export function setAuthToken(sessionId: string | undefined): void {
    setCookie("authToken", sessionId);
}

export function deleteAuthToken() {
    deleteCookie("authToken")
}
// _____________________

export function getUserName(): CookieValueTypes {
    return getCookie("userName");
}

export function setUserName(sessionId: string | undefined): void {
    setCookie("userName", sessionId);
}

export function deleteUserName() {
    localStorage?.delete("userName")
}
export function getUserId(): CookieValueTypes {
    return getCookie("userID");
}

export function setUserId(sessionId: string | undefined): void {
    setCookie("userID", sessionId);
}

export function deleteUserId() {
    deleteCookie("userID")
}
export function logout() {
    deleteCookie("authToken")
    deleteCookie("userName")
    deleteCookie("userID")
}


