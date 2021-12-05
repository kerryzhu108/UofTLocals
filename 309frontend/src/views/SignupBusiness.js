import React from "react";

import Header from "../components/Header";
import Link from "../components/Link";
import InputInfoBusiness from "../components/InputInfoBusiness";

import { updateLoginForm, registerBusiness } from '../apis/login'

class SignupBusiness extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        confirmation: "",
        description: "",
        type: "",
    };

    render() {
        return (
            <div>
                <Header />
                <div className="loginElements">
                    <p>
                        Please provide the following information to create a
                        business account.
                    </p>
                    <InputInfoBusiness
                        name={this.state.name}
                        username={this.state.username}
                        password={this.state.password}
                        confirmation={this.state.confirmation}
                        description={this.state.description}
                        type={this.state.type}
                        onChange={(e) => updateLoginForm(this, e.target)}
                        onClick={(e) => registerBusiness(this, e)}
                    />
                    <br />
                    <span>
                        Already a member?
                        <Link href="/login" name="Login" />
                    </span>
                    <br />
                    <span>
                        Not a business?
                        <Link href="/signup" name="Sign up as a student" />
                    </span>
                </div>
            </div>
        );
    }
}

export default SignupBusiness;
