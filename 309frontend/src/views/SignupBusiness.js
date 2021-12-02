import React from 'react';

import Header from "../components/Header";
import Link from "../components/Link";
import InputInfoBusiness from "../components/InputInfoBusiness";

import { registerBusiness } from '../actions/login'

class SignupBusiness extends React.Component {

    state = {
        name: "",
        category: "",
        location: "",
        username: "",
        password: "",
        confirmation: "",
        message: "",
        current_usernames: []
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    /* This function will contain code to add a business to the system, sending data to the server. Uses the data
    * currently in the state variable. */
    addBusiness = (event) => {
        event.preventDefault()
        if (this.state.password !== this.state.confirmation) {
            this.setState({message: "Passwords do not match."})
        } else if (this.state.current_usernames.includes(this.state.username)) {
            this.setState({message: "Username already taken."})
        } else {
            console.log(registerBusiness(this.state.username, this.state.password, this.state.name))    
            // window.location.href = "/login"      // just redirect to the login page for now
        }
    }

    /* Set the state variables upon loading. */
    componentDidMount() {
        window.addEventListener('load', this.getAllUsers.bind(this));
    }

    /* Get all usernames currently in the system. */
    getAllUsers() {
        // for phase 2 this information will come from a server
        this.setState({
            current_usernames: ["user", "user2", "admin"]
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse"/>
                </Header>
                <div className="loginElements">
                    <p>Please provide the following information to create a business account.</p>
                    <InputInfoBusiness name={this.state.name}
                                       location={this.state.location}
                                       category={this.state.category}
                                       username={this.state.username}
                                       password={this.state.password}
                                       confirmation={this.state.confirmation}
                                       onChange={this.handleInputChange}
                                       onClick={this.addBusiness}/>
                    <span className="red small"> {this.state.message}</span>
                    <br/>
                    <span className="small">Already a member?<Link href="/login" name="Login"/></span>
                    <span className="small">Not a business?<Link href="/signup" name="Sign up as a student"/></span>
                </div>
            </div>
        )
    }
}

export default SignupBusiness;