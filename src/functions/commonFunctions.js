export async function clearLocalStorage() {
    localStorage.removeItem(process.env.REACT_APP_LS_KEY_USER);
    localStorage.removeItem(process.env.REACT_APP_LS_KEY_TOKEN);
    localStorage.removeItem(process.env.REACT_APP_LS_KEY_REFRESH_TOKEN);
    localStorage.removeItem(process.env.REACT_APP_LS_KEY_TOKEN_EXPIRY);
    localStorage.removeItem(process.env.REACT_APP_LS_KEY_REFRESH_TOKEN_EXPIRY);
}