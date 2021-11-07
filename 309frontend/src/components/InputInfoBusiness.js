import React from "react";

class InputInfoBusiness extends React.Component {

    render() {
        const {name, location, category, username, password, confirmation, onChange, onClick} = this.props
        return (
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label className="infoLabel">Name: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="name" value={name} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Location: <span className="red">*</span></label></td>
                        <td><input className="infoInput" name="location" value={location} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="infoLabel">Category: <span className="red">*</span></label></td>
                        <td><select className="infoSelect" name="category" value={category} onChange={onChange}/></td>
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