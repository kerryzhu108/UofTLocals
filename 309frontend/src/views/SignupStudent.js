import React from 'react';

import Header from "../components/Header";
import Link from "../components/Link";
import InputInfoStudent from "../components/InputInfoStudent";

class SignupStudent extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
        message: "",
        current_usernames: []
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

    /* This function will contain code to add a student to the system, sending data to the server. Uses the data
    * currently in the state variable. */
    addStudent = (event) => {
        event.preventDefault()
        if (this.state.password !== this.state.confirmation) {
            this.setState({message: "Passwords do not match."})
        } else if (this.state.current_usernames.includes(this.state.username)) {
            this.setState({message: "Username already taken."})
        } else {
            window.location.href = "/login"     // just redirect to the login page for now
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
                    <Link href="/" name="Browse"/>
                </Header>
                <div className="loginElements">
                    <p>Please provide the following information to create a student account.</p>
                    <InputInfoStudent firstname={this.state.firstname}
                                      lastname={this.state.lastname}
                                      username={this.state.username}
                                      password={this.state.password}
                                      confirmation={this.state.confirmation}
                                      onChange={this.handleInputChange}
                                      onClick={this.addStudent}/>
                    <span className="red small"> {this.state.message}</span>
                    <br/>
                    <span className="small">Already a member?<Link href="/login" name="Login"/></span>
                    <span className="small">Not a student?<Link href="/business-signup"
                                                                name="Sign up as a business"/></span>
                </div>
            </div>
        )
    }
}

export default SignupStudent;