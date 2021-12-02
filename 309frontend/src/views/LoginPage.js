import React from 'react';

import Header from "../components/Header";
import LoginInput from "../components/LoginInput";
import Link from "../components/Link";

import { login } from '../actions/login'

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        message: "",
        existing_users: []
    }

    /* Update the state when user types in information. */
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    /* Validate the username and password inputted by the user. */
    validate = (event) => {
        event.preventDefault()
        console.log(login(this.state.username, this.state.password))    
        // const results = (this.state.existing_users.map((user) => {
        //     if (this.state.username === user.username && this.state.password === user.password) {
        //         return 1
        //     }
        //     return 0
        // }))
        // // hard-coded redirection based on which of the three users signed in.
        // if (results[0] === 1) {
        //     window.location.href = "/landing-user"      // normal user
        // } else if (results[1] === 1) {
        //     window.location.href = "/landing-business"  // business user
        // } else if (results[2] === 1) {
        //     window.location.href = "/admin-panel"       // admin
        // } else {
        //     this.setState({username: "", password: "", message: "Invalid login credentials. Please try again."})
        // }
    }

    /* Set the state variables upon loading. */
    componentDidMount() {
        window.addEventListener('load', this.getExistingUsers.bind(this));
    }

    /* Get all <username>, <password> combos currently in the system. */
    getExistingUsers() {
        // for phase 2 this information will come from a server
        this.setState({
            existing_users: [
                {username: "user", password: "user"},
                {username: "user2", password: "user2"},
                {username: "admin", password: "admin"}
            ]
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/" name="Browse" />
                </Header>
                <div className="loginElements">
                    <p>Please login to continue.</p>
                    <LoginInput username={this.state.username}
                                password={this.state.password}
                                onChange={this.handleInputChange}
                                onClick={this.validate}/>
                    <span className="red small"> {this.state.message}</span>
                    <br/>
                    <span className="small">New member? Sign up as a
                        <Link href="/signup" name="student"/> or
                        <Link href="/business-signup" name="business"/>
                    </span>
                </div>

            </div>
        )
    }
}

export default LoginPage;