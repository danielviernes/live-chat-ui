//Custom Exception
export const LiveChatErrors = {
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',

}

//TODO: "error" must match enum object LiveChatErrors
export class LiveChatException {
    constructor(message, error) {
        this.message = message;
        this.error = error;
    }
}