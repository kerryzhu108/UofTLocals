import React from "react";

class StudentInputInfo extends React.Component {

    render() {
        const { firstname, lastname, username, password, confirmation, onChange, onClick} = this.props
        return (
            <div>
                <table>
                    <tr>
                        <td><label>First name: <span className="red">*</span></label></td>
                        <td><input name="firstname" value={ firstname } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><label>Last name: <span className="red">*</span></label></td>
                        <td><input name="lastname" value={ lastname } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><label>Username: <span className="red">*</span></label></td>
                        <td><input name="username" value={ username } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><label>Password: <span className="red">*</span></label></td>
                        <td><input type="password" name="password" value={ password } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><label>Confirm password: <span className="red">*</span></label></td>
                        <td><input type="password" name="confirmation" value={ confirmation } onChange={ onChange }/></td>
                    </tr>
                    <tr>
                        <td><p className="grey small"><span className="red">*</span> required information</p></td>
                        <td><input  id="confirmButton" type="submit" value="Submit" onClick={ onClick }/></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default StudentInputInfo;