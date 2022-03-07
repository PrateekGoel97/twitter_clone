import { ADD_POST, DELETE_POST, UPDATE_POSTS } from "./actiontypes";


export function fetchPosts(){

    return function(dispatch){

        fetch('https://tweets.free.beeceptor.com/tweets/all')
        .then(res => res.json())
        .then(data =>{

            console.log(data);

            dispatch(update(data));
        })
    }
}

export function update(posts){
    return {
        type:UPDATE_POSTS,
        posts
    }
}

export function addpost(post){

    return {
        type:ADD_POST,
        post
    }

}

export function deletePost(id){
    return {
        type:DELETE_POST,
        id
    }
}