import React from "react";

class LoginInput extends React.Component {

    render() {
        const { username, password, onChange, onClick } = this.props
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input name="username" value={ username } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" name="password" value={ password } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td/>
                            <td><input id="loginButton" type="submit" value="LOGIN" onClick={ onClick }/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default LoginInput;