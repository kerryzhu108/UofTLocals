import React from 'react';
import Header from "../components/Header";
import "../css/Login.css"
import LoginInput from "../components/LoginInput";

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        message: "",
        existing_users: [
            {username: "user", password: "user"},
            {username: "user2", password: "user2"},
            {username: "admin", password: "admin"}
        ]
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
        const results = (this.state.existing_users.map((user) => {
            if (this.state.username === user.username && this.state.password === user.password) {
                return 1
            }
            return 0
        }))
        // hard-coded redirection based on which of the three users signed in.
        if (results[0] === 1) {
            window.location.href = "/"      // normal user
        } else if (results[1] === 1) {
            window.location.href = "/"      // business user
        } else if (results[2] === 1) {
            window.location.href = "/admin-panel"      // admin
        } else {
            this.setState({message: "Invalid login credentials. Please try again."})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="loginElements">
                    <p>Please login to continue.</p>
                    <LoginInput username={this.state.username}
                                password={this.state.password}
                                onChange={this.handleInputChange}
                                onClick={this.validate}/>
                    <span className="red small"> {this.state.message}</span>
                    <br/>
                    <span className="small">New member? Sign up as a
                        <a href="/signup">student</a> or
                        <a href="/businessSignup"> business</a>
                    </span>
                </div>

            </div>
        )
    }
}

export default LoginPage;