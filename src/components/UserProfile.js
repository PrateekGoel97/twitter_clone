import React from "react";


class UserProfile extends React.Component{


render(){

    const {profile} = this.props;

    
    return (
        <div className="userProfile">


            <div className="profile-title">
               <span className="profile-title-name"> {profile.first_name + " " + profile.last_name} </span>
                <div className="profile-title-tweets"><small>100 Tweets</small></div>
            </div>


            <div className="profile-header" >
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            </div>

            <div className="profile-header-pic">

                     <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                
            </div>

            <div className="profile-content">

                <span className="profile-title-name"> {profile.first_name + " " + profile.last_name} </span>

                <div>
                    <small className="grey">{profile.email}</small>
                </div>

                <div className="profile-info">

                    <div className="profile-location">

                        <div>
                            <span className="grey"><i class="fi fi-rs-marker"></i> </span>
                            <span className="grey">{profile.country}</span>
                        </div>

                        <div className="profile-gender">

                               <span className="grey"><i class="fi fi-rr-user"></i> </span>
                                <span className="grey">{profile.gender}</span>
                        </div>
                   </div>
                </div>

            </div>


            
        </div>
    )
}

}

export default UserProfile;