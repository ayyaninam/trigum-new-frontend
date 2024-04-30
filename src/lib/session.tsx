type AuthToken = string;
type UserName = string;
type UserId = string;

import { cookies } from "next/headers";

export function getAuthToken(): AuthToken | null {
    return localStorage?.getItem("auth-token");
  }

function setAuthToken(sessionId: AuthToken): void {
    localStorage?.setItem("auth-token", sessionId);
}

export function deleteAuthToken() {
    localStorage?.removeItem("auth-token")
}
// _____________________

export function getUserName(): UserName | null {
    return localStorage?.getItem("username");
}

function setUserName(sessionId: UserName): void {
    localStorage?.setItem("username", sessionId);
}

export function deleteUserName() {
    localStorage?.delete("username")
}
export function getUserId(): UserId | null {
    return localStorage?.getItem("userid");
  }

function setUserId(sessionId: UserId): void {
    localStorage?.setItem("userid", sessionId);
}

export function deleteUserId() {
    localStorage?.removeItem("userid")
}
export function logout() {
    localStorage?.removeItem("auth-token")
    localStorage?.removeItem("username")
    localStorage?.removeItem("userid")
}
