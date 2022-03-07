import { UPDATE_PROFILE } from "../actions/actiontypes";


const initialProfileState = {};


export default function profile(state=initialProfileState,action){

    switch(action.type){

        case UPDATE_PROFILE:
                    return action.profile;

        default: return state;
    }

}