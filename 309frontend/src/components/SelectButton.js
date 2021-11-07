import React from "react";

import "../css/adminpage_style.css";

class SelectButton extends React.Component {
    render() {
        const {change} = this.props
        return (
            <select className="select_button" onChange={change}>
                <option selected disabled>ORDER BY</option>
                <option value="name (A-Z)">Name (A-Z)</option>
                <option value="name (Z-A)">Name (Z-A)</option>
            </select>
        );
    }
}

export default SelectButton;