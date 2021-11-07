import React from 'react';
import Header from "../components/Header";
import "../css/Signup.css"
import Link from "../components/Link";

class SignupPage extends React.Component {

    state = {
        name: "",
        category: "",
        location: "",
        username: "",
        password: "",
        confirmation: "",
        message: ""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    addBusiness = (event) => {
        /* this function will contain code to add a business to the system */
        if (this.state.password !== this.state.confirmation) {
            this.setState({ message: "Passwords do not match." })
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
                            <td><label>Name: <span className="red">*</span></label></td>
                            <td><input name="firstname" value={ this.state.name } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Location: <span className="red">*</span></label></td>
                            <td><input name="lastname" value={ this.state.location } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Category: <span className="red">*</span></label></td>
                            <td><input name="lastname" value={ this.state.category } onChange={ this.handleInputChange}/></td>
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
                            <td><input  id="confirmButtonBusiness" type="submit" value="Sign up as a business" onClick={ this.addBusiness }/></td>
                        </tr>
                        <tr>
                            <td/>
                            <td><label><span className="red small"> {this.state.message}</span></label></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <span className="small">Already a member?
                                    <a href="/login">Login</a>
                                </span>
                                <span className="small">Not a business?
                                    <a href="/signup">Sign up as a student</a>
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