import React, { Component } from 'react';
import './Signin.scss'

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Please Sign In</h1>
                <form className='form-styles'>
                    <input placeholder='Your Email' type='email' />
                    <input placeholder='Your Password' type='password'/>
                    <input type='submit' value='Sign In' onClick={() => this.props.onRouteChange('home')} className='submit'/>
                    <p>Need to create an account? <span onClick={() => this.props.onRouteChange('register')}>Register Here</span></p>
                    <span onClick={() => this.props.areTheyAGuest('yes')}>Continue as a guest</span>
                </form>
            </div>
        );
    
        }
    }


export default Signin;