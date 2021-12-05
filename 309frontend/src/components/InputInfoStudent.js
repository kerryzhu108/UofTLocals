import React from "react";

class InputInfoStudent extends React.Component {

    render() {
        const {firstname, lastname, email, password, confirmation, onChange, onClick} = this.props
        return (
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label className="infoLabel">First name: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="firstname" value={firstname} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Last name: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="lastname" value={lastname} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Email: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="email" value={email} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Password: <span className="red">*</span></label></td>
                        <td><input className="infoInput" type="password" name="password" value={password}
                                   onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Confirm password: <span className="red">*</span></label></td>
                        <td><input className="infoInput" type="password" name="confirmation" value={confirmation}
                                   onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><p className="grey small"><span className="red">*</span> required information</p></td>
                        <td><input id="confirmButtonStudent" type="submit" value="Submit" onClick={onClick}/></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default InputInfoStudent;