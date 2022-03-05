import React from 'react';
import Navbar from './Navbar';
import Posts from './Posts';


class Centre extends React.Component{


    render(){
        return (
            <div className='centre'>
                <Navbar />
                <Posts />
            </div>
        )
    }
} 


export default Centre;