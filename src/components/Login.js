import React from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/auth';

class Login extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            email:'',
            password:'',
            emailError:null,
            passError:null
        }
    }

    handleEmail = (e) =>{

        

        this.setState({email:e.target.value});

        if(e.target.value === ''){
            this.setState({
                emailError:null
            })
            return;
        }

        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!reg.test(e.target.value)){
            this.setState({
                emailError:'Email is not valid.'
            })
        }
        else{
            this.setState({
                emailError:null
            })
        }
       
    }

    handlePassword = (e) =>{


        this.setState({password:e.target.value});

        if(e.target.value === ''){
            this.setState({
                passError:null
            })
            return;
        }

        var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!reg.test(e.target.value)){
            this.setState({
                passError:'Password is not valid'
            })
        }
        else{
            this.setState({
                passError:null
            })
        }
    }

    handleSubmit = (e) =>{

        e.preventDefault();

        const {email,password} = this.state;
        console.log(email+password);

        this.props.dispatch(login());
    }

    render(){

        const {email,password,emailError,passError} = this.state;
        const {isLogedIn} = this.props.auth;

        

        return (
            <div className='Login'>

                <div className='left-login'>

                    <i class="devicon-twitter-original"></i>

                </div>

                <div className='right-login'>

                        <div className='icon'>
                        <i class="devicon-twitter-original colored"></i>
                        </div>

                        <form>

                        <div className='field'>
                            <input type="email" 
                            placeholder='Email' 
                            value={email} 
                            onChange={this.handleEmail}
                            required
                            />

                        </div>

                        <div className='error-login'>
                            <small>{emailError}</small>
                        </div>


                        <div className='field'>
                            <input type="password" 
                            placeholder='Password'  
                            value={password} 
                            onChange={this.handlePassword} 
                            required
                            />

                        </div>

                        <div className='error-login'>
                            <small>{passError}</small>
                        </div>

                        <div className='field'>
                        <button type="submit"  onClick={this.handleSubmit} disabled={(emailError === null && passError === null)?false:true }>Login</button>
                        </div>


                        </form>
                </div>
                
            </div>
        )
    }
}


function mapStateToProps(state){

    return {
        auth:state.auth
    }
}

const LoginComponent = connect(mapStateToProps)(Login);

export default LoginComponent;