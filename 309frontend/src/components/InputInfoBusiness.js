import React from "react";

class InputInfoBusiness extends React.Component {

    render() {
        const { name, email, username, password, confirmation, description, type, onChange, onClick } = this.props
        return (
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label className="infoLabel">Business Name: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="name" value={name} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Description: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="description" value={description} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Email: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="email" value={email} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Business type: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="type" value={type} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Username: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="username" value={username} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Password: <span className="red">*</span></label></td>
                        <td><input className="infoInput" type="password" name="password" value={password}
                                   onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Confirm password: <span className="red">*</span></label></td>
                        <td><input className="infoInput" type="password" name="confirmation" value={confirmation}
                                   onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="grey small">
                                <span className="red">*</span> required information
                            </p>
                        </td>
                        <td><input id="confirmButtonBusiness" type="submit" value="Sign up as a business"
                                   onClick={onClick}/></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default InputInfoBusiness;