import decode from 'jwt-decode';
import { storage } from 'utils';

interface Token {
    expiredToken: boolean;
    validToken: boolean;
    invalidToken: boolean;
}

export const useToken = (): Token => {
    const token = storage.get('ingodo-token');

    let authStatus = {
        expiredToken: false,
        validToken: false,
        invalidToken: false,
    };
    try {
        const { exp } = decode(token);

        authStatus =
            Date.now() >= exp * 1000
                ? { ...authStatus, expiredToken: true }
                : { ...authStatus, validToken: true };
    } catch (error) {
        authStatus = { ...authStatus, invalidToken: true };
    }

    return authStatus;
};
