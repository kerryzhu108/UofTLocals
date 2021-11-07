import React from "react";

class LoginInput extends React.Component {

    render() {
        const { username, password, onChange, onClick } = this.props
        return (
            <div>
                <table>
                    <tr>
                        <td><label>Username: </label></td>
                        <td><input name="username" value={ username } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><label>Password: </label></td>
                        <td><input name="password" value={ password } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td/>
                        <td><input id="loginButton" type="submit" value="LOGIN" onClick={ onClick }/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default LoginInput;