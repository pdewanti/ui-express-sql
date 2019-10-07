import axios from 'axios';

import {
    REGISTER_EMAIL_CHANGED,
    REGISTER_CONFIRM_EMAIL_CHANGED,
    REGISTER_CONFIRM_PASSWORD_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_USERNAME_CHANGED,
    ON_USER_REGISTER,
    REGISTER_FAILED,
    REGISTER_SUCCESS
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

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch({ type: ON_USER_REGISTER })
        if(user.email !== '' && user.password !== ''
            && user.username !== '' && user.confirmEmail !== ''
            && user.confirmPassword !== '') {
                if(user.email === user.confirmEmail) {
                    if(user.password === user.confirmPassword) {
                       axios.post('http://localhost:1997/register', {
                           email: user.email,
                           password: user.password,
                           username: user.username
                       }).then(res => {
                            dispatch({
                                type: REGISTER_SUCCESS
                            })
                       }).catch(err => {
                           console.log(err.response)
                           dispatch({
                               type: REGISTER_FAILED,
                               payload: err.response.data.message
                           })
                       })
                    } else {
                        dispatch({
                            type: REGISTER_FAILED,
                            payload: 'Password dan Confirm Password Harus Sama'
                        })
                    }
                } else {
                    dispatch({
                        type: REGISTER_FAILED,
                        payload: 'Email dan Confirm Email Harus Sama'
                    })
                }
        } else {
            dispatch({
                type: REGISTER_FAILED,
                payload: 'Mohon isi semua Form diatas'
            })
        }
    }
}