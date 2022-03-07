import { ADD_POST, DELETE_POST, UPDATE_POSTS } from "../actions/actiontypes";

const initialPostState = [];

export default function posts(state = initialPostState,action){

    switch(action.type){

        case UPDATE_POSTS:
            return action.posts;

        case ADD_POST:
            return [action.post,...state];

        case DELETE_POST:
           
           const arr =  state.filter((item) => {
                return item.id !== action.id
            })
            return arr;

        default: return state;
    }

}