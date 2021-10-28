import React from 'react';
import Link from "../components/Link";
import Header from "../components/Header";
import InputField from '../components/InputField'
import "../css/Signup.css"

class SignupPage extends React.Component {

    state = {
        name: "",
        category: "",
        location: "",
        username: "",
        password: "",
        confirmation: ""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                    <Link name="Login/Signup" />
                </Header>
                <div className="loginElements">
                    <form>
                        <table>
                            <InputField label="Business name"
                                        value={ this.state.name }
                                        onChange={ this.handleInputChange }
                                        name="name">
                            </InputField>
                            <InputField label="Category"
                                            value={ this.state.category }
                                            onChange={ this.handleInputChange }
                                            name="category">
                            </InputField>
                            <InputField label="Location"
                                        value={ this.state.location }
                                        onChange={ this.handleInputChange }
                                        name="location">
                            </InputField>
                            <InputField label="Username"
                                        value={ this.state.username }
                                        onChange={ this.handleInputChange }
                                        name="username">
                            </InputField>
                            <InputField label="Password"
                                        value={ this.state.password }
                                        onChange={ this.handleInputChange }
                                        name="password">
                            </InputField>
                            <InputField label="Confirm Password"
                                        value={ this.state.confirmation }
                                        onChange={ this.handleInputChange }
                                        name="confirmation">
                            </InputField>
                            <tr>
                                <td>
                                    <p className="grey small">
                                        <span className="red">*</span> = required information 
                                    </p>
                                </td>
                                <td>
                                    <input id="confirmButtonBusiness" type="submit" value="Sign up as a Business"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <span className="small">Already a member? 
                                            <span className="orange"><strong> Login instead</strong></span>.
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </form>	
                </div>
                <div className="loginElements">
                    <form>
                        <table>
                            <InputField label="First name"
                                        value={ this.state.firstname }
                                        onChange={ this.handleInputChange }
                                        name="firstname">
                            </InputField>
                            <InputField label="Last name"
                                        value={ this.state.lastname }
                                        onChange={ this.handleInputChange }
                                        name="lastname">
                            </InputField>
                            <InputField label="Username"
                                        value={ this.state.username }
                                        onChange={ this.handleInputChange }
                                        name="username">
                            </InputField>
                            <InputField label="Password"
                                        value={ this.state.password }
                                        onChange={ this.handleInputChange }
                                        name="password">
                            </InputField>
                            <InputField label="Confirm Password"
                                        value={ this.state.confirmation }
                                        onChange={ this.handleInputChange }
                                        name="confirmation">
                            </InputField>
                            <tr>
                                <td>
                                    <p className="grey small">
                                        <span className="red">*</span> = required information 
                                    </p>
                                </td>
                                <td>
                                    <input id="confirmButtonStudent" type="submit" value="Sign up as a Student"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <span className="small">Already a member? 
                                            <span className="green"><strong> Login instead</strong></span>.
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </form>	
                </div>
            </div>
        )
    }

}

export default SignupPage;