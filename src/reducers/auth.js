import { LOGIN } from "../actions/actiontypes"


const initialAuthState = {
    isLogedIn:false,
}

export default function auth(state = initialAuthState,action){

    switch(action.type){

        case LOGIN:return {
            ...state,
            isLogedIn:true
        }

        default: return state;
    }

}