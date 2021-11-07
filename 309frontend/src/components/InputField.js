import React from 'react'
import '../css/InputField.css'

class InputField extends React.Component {

    // NO LONGER USED

    render() {
        const { label, value, onChange, name } = this.props
        return (
            <div className="contain">
                <label>{ label }
                    <span className="red">*</span>
                </label>
                <input  type="text" name={ name } placeholder={ value || "" } value={ value } onChange={ onChange }/>
            </div>
        )
    }
}

export default InputField;

