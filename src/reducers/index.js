import { combineReducers } from 'redux';
import RegisterFormReducer from './RegisterFormReducer';
import LoginFormReducer from './LoginFormReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    pikachu: (state='Ryan Reynolds', action) => {
        if(action.nama) {
            return action.nama
        }
        console.log(state)
        return state
    },
    registerForm: RegisterFormReducer,
    loginForm: LoginFormReducer,
    user: UserReducer
})