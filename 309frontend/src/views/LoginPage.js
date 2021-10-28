import React from 'react';
import Link from "../components/Link";
import Header from "../components/Header";
import InputField from '../components/InputField'
import "../css/Login.css"

class LoginPage extends React.Component {

    state = {
        username: "",
        password: ""
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
                            <tr>
                                <td>
                                    <p class="grey small"><span class="red">*</span> = required information </p>
                                </td>
                                <td>
                                    <input id="confirmButton" type="submit" value="Login"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label><span class="small">New member? <Link name="Sign up instead"></Link></span></label>
                                </td>
                            </tr>
                        </table>
                    </form>	
                </div>
            </div>
        )
    }

}

export default LoginPage;