import { 
    LOGIN_SUCCESS 
} from "../actions/types";

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    status: '',
    token: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return action.payload
        default :
            return state
    }
}