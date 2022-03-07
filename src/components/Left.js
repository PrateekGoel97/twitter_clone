import React from "react";
import { Link } from "react-router-dom";


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

                    <Link to="/" className="link">
                    <i class="fi fi-rr-home"></i>
                    </Link>
                    </div>

                    <div className="left-link-name">
                        
                    <Link to="/" className="link">
                         Home
                    </Link>
                    </div>
                </div>
                
                


                <div className="left-link">
                    
                <div className="profile-pic">

                <Link to="/profile" className="link">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-pic" />
                </Link>
                </div>

                    <div className="left-link-name">
                    <Link to="/profile" className="link">
                           Profile
                    </Link>
                    </div>
                </div>

                

            </div>



        </div>)
    }


}

export default Left;