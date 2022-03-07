import React from 'react';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

import {connect} from 'react-redux';
import {BrowserRouter as Router,  Route , Routes , Navigate} from 'react-router-dom';
import { fetchPosts } from '../actions/posts';

class App extends React.Component{



  render(){

    const {isLogedIn} = this.props.auth;


    return(
      <Router>
        <div className='App'>

       
        <Routes>
          <Route path='/' element={<Home  isLogedIn={isLogedIn}/>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
      </Router>
    );
  }


}

function mapStateToProps(state){

  return {
      auth:state.auth
  }
}

export default connect(mapStateToProps)(App);


