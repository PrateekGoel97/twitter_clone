import React from "react";


class Navbar extends React.Component{


    render(){
        return (
        <div className="navbar">
                <div className="nav-head" >
                    Home
                </div>    
                <div className="nav-head">
                    Profile
                </div> 
                <div className="nav-head">
                    Logout
                </div>         
        </div>

    )}


}

export default Navbar;