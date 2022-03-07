import { LOGIN, LOGOUT } from "./actiontypes";


export function login(){
    return {
        type:LOGIN
    }
}

export function logout(){
    return {
        type:LOGOUT
    }
}