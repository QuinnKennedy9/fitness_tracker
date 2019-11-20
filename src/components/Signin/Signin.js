import React, { Component } from 'react';
import './Signin.scss'

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            loginStatus:'',
            errorMessage:"Your login credentials don't match any in our records.  Please try again",
            errorDisplay:0
        }
    }

    updateEmail = (event) =>{
        this.setState({email:event.target.value});
    }

    updatePassword = (event) =>{
        this.setState({password:event.target.value});
    }

    attemptLogin = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:8888/fitness_tracker/admin/phpscripts/login.php';
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
        .then((resp) => { 
            return resp.text();
        })
        .then((text) => {
            var trimmedResponse = text.substring(0,17);
            this.setState({loginStatus:trimmedResponse});
            this.parseLogin();
        })
        .catch(function(error) {
        console.log(error);
    });
        
    }

    parseLogin = () =>{
        if(this.state.loginStatus === 'unsuccesful login'){
            this.setState({errorDisplay:1});
        }else{
            this.props.onRouteChange('home');
            this.props.updateName(this.state.loginStatus);
        }
    }
    render() {
        return (
            <div>
                <h1>Please Sign In</h1>
                <form className='form-styles'>
                    <input placeholder='Your Email' type='email' onChange={this.updateEmail}/>
                    <input placeholder='Your Password' type='password' onChange={this.updatePassword}/>
                    <input type='submit' value='Sign In' onClick={this.attemptLogin} className='submit'/>
                    <p>Need to create an account? <span onClick={() => this.props.onRouteChange('register')}>Register Here</span></p>
                    <span onClick={() => this.props.areTheyAGuest('yes')}>Continue as a guest</span>
                </form>
                <div className='login-error' style={{opacity:this.state.errorDisplay}}>
                    <p>{this.state.errorMessage}</p>
                </div>
            </div>
        );
    
        }
    }


export default Signin;