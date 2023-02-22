export function validateUsername(username) {
    if(username.length < process.env.REACT_APP_MIN_LENGTH_USERNAME) {
        return "Username length must be 5 or greater";
    }
    //more validations...

    return "";
}

export function validatePassword(password) {
    if(password.length < process.env.REACT_APP_MIN_LENGTH_PASSWORD) {
        return "Password length must be 5 or greater";
    }
    //more validations...

    return "";
}