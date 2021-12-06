import React from "react";

import Header from "../components/Header";
import LoginInput from "../components/LoginInput";
import Link from "../components/Link";

import { updateLoginForm, login } from '../apis/login'

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        type: "student",
    };

    render() {
        return (
            <div>
                <Header />
                <div className="loginElements">
                    <h1> Welcome! </h1>
                    <p>
                        Please login to continue. Remember to select the correct type in the dropdown below according to your account type.
                    </p>
                    <LoginInput
                        username={this.state.username}
                        password={this.state.password}
                        onChange={(e) => updateLoginForm(this, e.target)}
                        onClick={(e) => login(this, e)}
                    />
                    <br />
                    <span>
                        New member? Sign up as a
                        <Link href="/signup" name="student" /> or
                        <Link href="/business-signup" name="business" />
                    </span>
                </div>
            </div>
        );
    }
}

export default LoginPage;
