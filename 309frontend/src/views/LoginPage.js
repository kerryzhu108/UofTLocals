import React from 'react';
import Header from "../components/Header";
import "../css/Login.css"

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
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

    validate = (event) => {
        event.preventDefault()
        if (this.state.username === "user" && this.state.password === "user") {
            console.log("success")
            window.location.href = "/"
        } else {
            console.log("fail")
            this.setState({message: "Invalid login credentials. Please try again."})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="loginElements">
                    <table>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input name="username" value={ this.state.username } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input name="password" value={ this.state.password } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td/>
                            <td><input  id="confirmButton" type="submit" value="LOGIN" onClick={ this.validate }/></td>
                        </tr>
                        <tr>
                            <td/>
                            <td><label><span className="red small"> {this.state.message}</span></label></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <span className="small">New member? Sign up as a
                                    <a href="/signup">student</a> or
                                    <a href="/businessSignup"> business</a>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default LoginPage;