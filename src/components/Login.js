import React from 'react';


class Login extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            email:'',
            password:'',
            error:'',
            disable:true
        }
    }

    handleEmail = (e) =>{

        const {email} = this.state;
        this.setState({email:e.target.value});

       
    }

    handlePassword = (e) =>{

        const {password} = this.state;
        this.setState({password:e.target.value});


        
    }

    handleSubmit = (e) =>{

        const {email,password} = this.state;
        console.log(email+password)
    }

    render(){

        const {email,password,disable} = this.state;

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

                        <div className='field'>
                            <input type="password" 
                            placeholder='Password'  
                            value={password} 
                            onChange={this.handlePassword} 
                            required
                            />

                        </div>

                        <div className='field'>
                        <button type="submit"  onClick={this.handleSubmit} >Login</button>
                        </div>


                        </form>
                </div>
                
            </div>
        )
    }
}


export default Login;