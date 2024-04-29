type AuthToken = string;
type UserName = string;
type UserId = string;

import { cookies } from "next/headers";

export function getAuthToken(): AuthToken | undefined {
    const cookieStore = cookies();
    return cookieStore.get("auth-token")?.value;
  }

function setAuthToken(sessionId: AuthToken): void {
    const cookieStore = cookies();
    cookieStore.set("auth-token", sessionId);
}

export function deleteAuthToken() {
    const cookieStore = cookies();
    cookieStore.delete("auth-token")
}
// _____________________

export function getUserName(): UserName | undefined {
    const cookieStore = cookies();
    return cookieStore.get("username")?.value;
  }

function setUserName(sessionId: UserName): void {
    const cookieStore = cookies();
    cookieStore.set("username", sessionId);
}

export function deleteUserName() {
    const cookieStore = cookies();
    cookieStore.delete("username")
}
export function getUserId(): UserId | undefined {
    const cookieStore = cookies();
    return cookieStore.get("userid")?.value;
  }

function setUserId(sessionId: UserId): void {
    const cookieStore = cookies();
    cookieStore.set("userid", sessionId);
}

export function deleteUserId() {
    const cookieStore = cookies();
    cookieStore.delete("userid")
}
export async function logout() {
    "use server";
    const cookieStore = cookies();
    cookieStore.delete("auth-token")
    cookieStore.delete("username")
    cookieStore.delete("userid")
}
