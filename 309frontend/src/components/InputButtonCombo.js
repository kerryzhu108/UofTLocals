import React from 'react';

import "../css/InputButtonCombo.css"

class InputButtonCombo extends React.Component {
    render() {
        return (
            <div class="input-button-combo">
                <textarea type="text" onChange={this.props.onChange} />
                <button class={this.props.color} onClick={this.props.onClick}>{this.props.buttonName}</button>
            </div>
        );
    }
}

export default InputButtonCombo;