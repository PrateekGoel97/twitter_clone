import React from "react";
import Left from "./Left";
import Right from "./Right";
import UserProfile from "./UserProfile";
import { updateProfile } from "../actions/profile";
import {connect} from 'react-redux';
import { Navigate } from "react-router";


class Profile extends React.Component{

    componentDidMount(){


        fetch('https://tweets.free.beeceptor.com/profile')
        .then(res => res.json())
        .then(data => {
            console.log('profile data',data);

            this.props.dispatch(updateProfile(data));

        })
        .catch(error => console.log('profile error',error));
    }


    render(){

        const {profile,auth} = this.props;
          
        if(!auth.isLogedIn){
           return < Navigate to='/'></Navigate>
        }
        

        return (
            <div className="profile">
                    <Left />
                    <UserProfile profile={profile}/>
                    <Right  />
            </div>
        )
    }

}


function mapStateToProps(state){

    return {
        profile:state.profile,
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Profile);
