import { LOGIN_SUCCESS } from "./types";

export const confirmLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}