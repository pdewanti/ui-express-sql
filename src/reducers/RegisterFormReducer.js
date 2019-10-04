import {
    REGISTER_EMAIL_CHANGED,
    REGISTER_CONFIRM_EMAIL_CHANGED,
    REGISTER_CONFIRM_PASSWORD_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_USERNAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case REGISTER_USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case REGISTER_PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case REGISTER_CONFIRM_EMAIL_CHANGED:
            return { ...state, confirmEmail: action.payload }
        case REGISTER_CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmPassword: action.payload }
        default :
            return state
    }
}