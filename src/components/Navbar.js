import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { logout } from "../actions/auth";

class Navbar extends React.Component{


    handleClick = () =>{
        this.props.dispatch(logout());
    }


    render(){
        return (
        <div className="navbar">
                <div className="nav-head" >
                    <Link to="/" className="link">
                    Home
                    </Link>
                </div>    
                <div className="nav-head">
                    <Link to="/profile" className="link">
                    Profile
                    </Link>
                </div> 
                <div className="nav-head" onClick={this.handleClick}>
                    Logout
                </div>         
        </div>

    )}


}

function mapStateToProps(state){

    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Navbar);

