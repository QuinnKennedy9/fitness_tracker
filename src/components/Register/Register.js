import React, { Component } from 'react';
import './Register.scss'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            name:'',
            password:''
        }
    }

    updateEmail = (event) =>{
        this.setState({email:event.target.value});
    }

    updateName = (event) =>{
        this.setState({name:event.target.value});
    }

    updatePassword = (event) =>{
        this.setState({password:event.target.value});
    }

    registerUser = (event) =>{
        event.preventDefault();
        //this.props.onRouteChange('signin');
        
    }

    render() {
        return (
            <div>
                <h1>Please Enter The Appropriate Information</h1>
                <form className='form-styles'>
                    <input placeholder='Your Email' type='email' onChange={this.updateEmail}/>
                    <input placeholder='Your Name' type='text' onChange={this.updateName}/>
                    <input placeholder='Your Password' type='password' onChange={this.updatePassword}/>
                    <input type='submit' value='Register' onClick={this.registerUser} className='submit'/>
                </form>
            </div>
        );
    
        }
    }


export default Register;