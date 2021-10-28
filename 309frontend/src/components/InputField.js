import React from 'react'
import '../css/InputField.css'

class InputField extends React.Component {
    
    render() {
        const { label, value, onChange, name } = this.props
        return (
            <tr>
                <td>
                    <label>{ label }
                        <span className="red">*</span>
                    </label>
                </td>
                <td>
                    <input  type="text" 
                            name={ name }
                            placeholder={ value || "" }
                            value={ value }
                            onChange={ onChange }/>
                </td>
            </tr>
        )
    }
}

export default InputField;

