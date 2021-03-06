import React from "react";

import "../css/InputButtonCombo.css";

class InputButtonCombo extends React.Component {
    render() {
        return (
            <div className="input-button-combo">
                <textarea
                    value={this.props.value}
                    type="text"
                    onChange={this.props.onChange}
                />
                <button
                    className={this.props.color}
                    onClick={this.props.onClick}
                >
                    {this.props.buttonName}
                </button>
            </div>
        );
    }
}

export default InputButtonCombo;
