import React from "react";

class BusinessInputInfo extends React.Component {

    render() {
        const { name, location, category, username, password, confirmation, onChange, onClick} = this.props
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name: <span className="red">*</span></label></td>
                            <td><input name="name" value={ name } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Location: <span className="red">*</span></label></td>
                            <td><input name="location" value={ location } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Category: <span className="red">*</span></label></td>
                            <td><select name="category" value={ category } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Username: <span className="red">*</span></label></td>
                            <td><input name="username" value={ username } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Password: <span className="red">*</span></label></td>
                            <td><input name="password" value={ password } onChange={ onChange }/></td>
                        </tr>
                        <tr>
                            <td><label>Confirm password: <span className="red">*</span></label></td>
                            <td><input name="confirmation" value={ confirmation } onChange={ onChange }/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="grey small">
                                    <span className="red">*</span> required information
                                </p>
                            </td>
                            <td><input id="confirmButtonBusiness" type="submit" value="Sign up as a business"
                                       onClick={ onClick }/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BusinessInputInfo;