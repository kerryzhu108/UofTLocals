import React from "react";
import "../css/Header.css";
import Link from "../components/Link";
import Cookies from "universal-cookie";

import { getProfile } from "../apis/profile";

/**
 * Standard website header component.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log("This is a constructor");

        // Attempt to get user information
        this.state = {
            loggedIn: false,
            user: null,
        };
    }

    async componentDidMount() {
        const cookies = new Cookies();
        const profile = await getProfile(cookies.get("access_token"));
        if (profile) {
            this.setState({ user: profile, loggedIn: true });
        }
    }

    render() {
        return (
            <div className="header">
                <h1 className="logo">uoft locals</h1>
                <div className="links">
                    <Link href="/" name="Browse" />
                    {this.state.loggedIn ? (
                        <Link href="/student-profile" name={this.state.user.name} />
                    ) : (
                        <Link href="/login" name="Login/Signup" />
                    )}
                    {this.state.loggedIn && (
                        <Link name="Logout" href="/logout" />
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
