import React from "react";
import Cookies from "universal-cookie";
import "../css/Link.css";

class Logout extends React.Component {
    logout = () => {
        const cookies = new Cookies();
        cookies.remove("access_token", { path: "/" });
        window.location.href = "/";
    };

    render() {
        return (
            <button className="link" onClick={this.logout}>
                Logout
            </button>
        );
    }
}

export default Logout;
