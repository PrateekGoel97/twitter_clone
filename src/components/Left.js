import React from "react";


class Left extends React.Component{


    render(){
        return (
        <div className="left">
           
           <div className="left-top-icon">
                <i class="devicon-twitter-original colored"></i>
           </div>

            <div className="left-links">

                <div className="left-link">
                    <div className="left-link-icon">
                    <i class="fi fi-rr-home"></i>
                    </div>

                    <div className="left-link-name">
                            Home
                    </div>
                </div>

                <div className="left-link">
                    
                <div className="profile-pic">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-pic" />
                </div>

                    <div className="left-link-name">
                           Profile
                    </div>
                </div>

                

            </div>



        </div>)
    }


}

export default Left;