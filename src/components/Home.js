import React from 'react';
import Left from './Left';
import Right from './Right';

import Centre from './Centre';

class Home extends React.Component{


    render(){

       console.log(this.props)

            // if(!this.props.isLogedIn){
            //     return <Login />
            // }
   
        return (
            <div className='home'>
                <Left />
                <Centre />
                <Right />
            </div>
        )
    }
}

export default Home;