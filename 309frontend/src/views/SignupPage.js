import React from 'react';
import Header from "../components/Header";
import "../css/Signup.css"
import Link from "../components/Link";

class SignupPage extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
        message: "",
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
                    <table>
                        <tr>
                            <td><label>First name: <span className="red">*</span></label></td>
                            <td><input name="firstname" value={ this.state.firstname } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Last name: <span className="red">*</span></label></td>
                            <td><input name="lastname" value={ this.state.lastname } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Username: <span className="red">*</span></label></td>
                            <td><input name="username" value={ this.state.username } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: <span className="red">*</span></label></td>
                            <td><input name="password" value={ this.state.password } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Confirm password: <span className="red">*</span></label></td>
                            <td><input name="confirmation" value={ this.state.confirmation } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td>
                                <p className="grey small">
                                    <span className="red">*</span> required information
                                </p>
                            </td>
                            <td><input  id="confirmButtonStudent" type="submit" value="Sign up as a student" onClick={ this.addStudent }/></td>
                        </tr>
                        <tr>
                            <td/>
                            <td><label><span className="red small"> {this.state.message}</span></label></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <span className="small">Already a member?
                                    <a href="/login">Login</a>
                                </span>
                                <span className="small">Not a student?
                                    <a href="/businessSignup">Sign up as a business</a>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default SignupPage;