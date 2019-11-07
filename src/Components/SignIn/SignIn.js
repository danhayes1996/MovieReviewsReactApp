import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';

import axios from 'axios';
import {API_USER_AUTH} from '../../Constants/api-const';

import './SignIn.css';

export default class SignInComponent extends Component {

    constructor(){
        super();
        this.state = {
            isAuthed: false,
            errMsg: "",
            uname: "",
            pass: ""
        };

        this.authSignIn = this.authSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkSubmit = this.checkSubmit.bind(this);
    }

    authSignIn() {
        const data = {
            username: this.state.uname,
            email: this.state.uname,
            password: this.state.pass
        };
        axios.post(API_USER_AUTH, data)
            .then(value => {
                console.log(value);
                //make user logged in, redirect to home page
                this.setState({isAuthed: true});
            }).catch(error => {
                console.log(error.response);
                this.setState({pass: "", isAuthed: false, errMsg: error.response.data.message});
                //show error response
            })
        //make api call
        console.log(this.state.uname, this.state.pass);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    checkSubmit(e){
        let key = (e.keyCode ? e.keyCode : e.which);
        console.log(key);
        if(key === 13) {
            this.authSignIn();
        }
    }

    render() {

        if(this.state.isAuthed) {
            return (<Redirect to="/home" />);
        } else {
            let errorDiv;
            if(this.state.errMsg !== "") {
                errorDiv = (
                    <div id="error">
                        <p>{this.state.errMsg}</p>
                    </div>
                );
            }

            return (
                <>
                    {errorDiv}
                    <div id="container">
                        <label htmlFor="uname">Email or Username</label>
                        <input autoFocus id="uname" type="text" value={this.state.uname} onChange={this.handleChange} />
        
                        <label htmlFor="pass">Password</label>
                        <input id="pass" type="password" value={this.state.pass} onChange={this.handleChange} onKeyPress={this.checkSubmit} />
                        
                        <input id="signin" type="button" value="Sign In" onClick={this.authSignIn}/>
                        
                        <p id="signup-link">Not got an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </>
            );
        }

    }
}