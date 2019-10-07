import {
    REGISTER_EMAIL_CHANGED,
    REGISTER_CONFIRM_EMAIL_CHANGED,
    REGISTER_CONFIRM_PASSWORD_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_USERNAME_CHANGED,
    ON_USER_REGISTER,
    REGISTER_FAILED,
    REGISTER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    loading: false,
    error: ''
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
        case ON_USER_REGISTER :
            return { ...state, loading: true, error: '' }
        case REGISTER_FAILED :
            return { ...state, loading: false, error: action.payload }
        case REGISTER_SUCCESS :
            return INITIAL_STATE
        default :
            return state
    }
}