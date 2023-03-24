import { clearLocalStorage } from "./commonFunctions";
import { LiveChatErrors, LiveChatException } from "./exceptions";

export async function getUserByUsername(username) {
    const response = await fetch(`${process.env.REACT_APP_WS_BASE_URL}/user?` + new URLSearchParams({ username: username }), {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    const data = await response.json();
    console.log(data)
    if(!response.ok && (data.errorCode === LiveChatErrors.TOKEN_EXPIRED)) {
        clearLocalStorage();
        throw new LiveChatException("Token is expired.", LiveChatErrors.TOKEN_EXPIRED);
    } else {
        return data;
    }

    //return { "username": data.username };
}

export async function refreshToken(refreshToken) {
    const response = await fetch(`${process.env.REACT_APP_WS_BASE_URL}/authenticate/refresh`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`,
        },
    });
    return await response.json();
}