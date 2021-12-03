import React from "react";

import "../css/InputInfo.css"

class LoginInput extends React.Component {

    render() {
        const {username, password, type, onChange, onClick} = this.props
        return (
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label className="infoLabel">Account type: </label></td>
                        <td>
                            <select className="infoSelect" name="type" value={type} onChange={onChange}>
                                <option value="student">Student</option>
                                <option value="business">Business</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Username: </label></td>
                        <td><input className="infoInput" name="username" value={username} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Password: </label></td>
                        <td><input className="infoInput" type="password" name="password" value={password}
                                   onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td/>
                        <td><input className="infoInput" id="loginButton" type="submit" value="LOGIN"
                                   onClick={onClick}/></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default LoginInput;