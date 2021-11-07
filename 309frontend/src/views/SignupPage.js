import React from 'react';
import Header from "../components/Header";
import "../css/Signup.css"
import Link from "../components/Link";
import StudentInputInfo from "../components/StudentInputInfo";

class SignupPage extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
        message: "",

        /* for phase 2, we will instead need to get a list of all current usernames from the server */
        current_usernames: ["user", "user2", "admin"]
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

    /* This function will contain code to add a student to the system */
    addStudent = (event) => {
        if (this.state.password !== this.state.confirmation) {
            this.setState({ message: "Passwords do not match." })
        } else if (this.state.current_usernames.includes(this.state.username)) {
            this.setState({ message: "Username already taken." })
        } else {
            window.location.href = "/"  // for now, just redirect to the homepage.
        }
    }

    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                </Header>
                <div className="loginElements">
                    <p>Please provide the following information to create a student account.</p>
                    <StudentInputInfo   firstname={ this.state.firstname }
                                        lastname={ this.state.lastname }
                                        username={ this.state.username }
                                        password={ this.state.password }
                                        confirmation={ this.state.confirmation }
                                        onChange={ this.handleInputChange }
                                        onClick={ this.addStudent }/>
                    <span className="red small"> { this.state.message }</span>
                    <br/>
                    <span className="small">Already a member?<a href="/login">Login</a></span>
                    <span className="small">Not a student?<a href="/businessSignup">Sign up as a business</a></span>
                </div>
            </div>
        )
    }
}

export default SignupPage;