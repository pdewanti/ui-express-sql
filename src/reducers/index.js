import { combineReducers } from 'redux';

export default combineReducers({
    pikachu: (state='Ryan Reynolds', action) => {
        if(action.nama) {
            return action.nama
        }
        console.log(state)
        return state
    }
})