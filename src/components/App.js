import React from 'react';
import Login from './Login';
import Home from './Home';

import {connect} from 'react-redux';
import {BrowserRouter as Router,  Route , Routes , Navigate} from 'react-router-dom';

class App extends React.Component{

  render(){

    const {isLogedIn} = this.props.auth;

    return(
      <Router>
        <Routes>
          <Route path='/' element={<Home  isLogedIn={isLogedIn}/>} />
    
        </Routes>
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


