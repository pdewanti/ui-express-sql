import {
    REGISTER_EMAIL_CHANGED,
    REGISTER_CONFIRM_EMAIL_CHANGED,
    REGISTER_CONFIRM_PASSWORD_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_USERNAME_CHANGED
} from './types';

export const inputRegisterEmail = (email) => {
    return {
        type: REGISTER_EMAIL_CHANGED,
        payload: email
    }
}

export const inputRegisterUsername = (username) => {
    return {
        type: REGISTER_USERNAME_CHANGED,
        payload: username
    }
}

export const inputRegisterPassword = (password) => {
    return {
        type: REGISTER_PASSWORD_CHANGED,
        payload: password
    }
}

export const inputRegisterConfirmEmail = (email) => {
    return {
        type: REGISTER_CONFIRM_EMAIL_CHANGED,
        payload: email
    }
}

export const inputRegisterConfirmPassword = (password) => {
    return {
        type: REGISTER_CONFIRM_PASSWORD_CHANGED,
        payload: password
    }
}