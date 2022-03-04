import React from 'react';
import Login from './Login';


class Home extends React.Component{


    render(){

       console.log(this.props)

            if(!this.props.isLogedIn){
                return <Login />
            }
   
        return (
            <div>
                This is Home
            </div>
        )
    }
}

export default Home;