import React, { Component } from 'react';
import './Register.scss'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            name:'',
            password:'',
            status:''
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
        const url = 'http://localhost:8888/fitness_tracker/admin/phpscripts/user.php';
        const user = {
            email: this.state.email,
            name: this.state.name,
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
            .then(() => { 
                this.setState({status:'successful'})
                console.log(this.state.status);
            })
            .catch(function(error) {
            console.log(error);
            this.setState({status:'failure'});
        });
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