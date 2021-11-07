import React from 'react';
import Header from "../components/Header";
import "../css/Signup.css"
import Link from "../components/Link";
import BusinessInputInfo from "../components/BusinessInputInfo";

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
                    <p>Please provide the following information to create a business account.</p>
                    <BusinessInputInfo  name={ this.state.name }
                                        location={ this.state.location }
                                        category={ this.state.category }
                                        username={ this.state.username }
                                        password={ this.state.password }
                                        confirmation={ this.state.confirmation }
                                        onChange={ this.handleInputChange }
                                        onClick={ this.addBusiness }/>
                    <span className="red small"> { this.state.message }</span>
                    <br/>
                    <span className="small">Already a member?<a href="/login">Login</a></span>
                    <span className="small">Not a business?<a href="/signup">Sign up as a student</a></span>
                </div>
            </div>
        )
    }
}

export default SignupPage;