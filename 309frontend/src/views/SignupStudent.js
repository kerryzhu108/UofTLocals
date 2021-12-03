import React from 'react';

import Header from "../components/Header";
import Link from "../components/Link";
import InputInfoStudent from "../components/InputInfoStudent";

import { updateLoginForm, registerStudent } from '../actions/login'

class SignupStudent extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/" name="Browse"/>
                </Header>
                <div className="loginElements">
                    <p>Please provide the following information to create a student account.</p>
                    <InputInfoStudent 
                        firstname={ this.state.firstname }
                        lastname={ this.state.lastname }
                        username={ this.state.username }
                        password={ this.state.password }
                        confirmation={ this.state.confirmation }
                        onChange={ e => updateLoginForm(this, e.target) }
                        onClick={ e => registerStudent(this, e) }/>
                    <br/>
                    <span>
                        Already a member?
                        <Link href="/login" name="Login"/>
                    </span>
                    <br/>
                    <span>
                        Not a student?
                        <Link href="/business-signup" name="Sign up as a business"/>
                    </span>
                </div>
            </div>
        )
    }
}

export default SignupStudent;