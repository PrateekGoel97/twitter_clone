import { UPDATE_PROFILE} from "./actiontypes";


export  function updateProfile(profile){

    return {
        type:UPDATE_PROFILE,
        profile
    }
}