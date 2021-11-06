import React from "react";

import "../css/adminpage_style.css";

class SelectButton extends React.Component {
    render() {
        const {change} = this.props
        return (
            <select className="select_button" onChange={change}>
                <option selected disabled>ORDER BY</option>
                <option value="name (A-Z)">Name</option>
            </select>
        );
    }
}

export default SelectButton;