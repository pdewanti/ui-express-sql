import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED
} from './types';

export const inputLoginEmail = (email) => {
    return {
        type: LOGIN_EMAIL_CHANGED,
        payload: email
    }
}

export const inputLoginPassword = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    }
}
