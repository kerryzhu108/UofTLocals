import React from "react";

import "../css/BusinessStyling.css";
import checkmark from "../images/checkmark.png";
import x from "../images/x.png";

class BusinessApp extends React.Component {
    render() {
        const { name, message, removeApp, addApp, email, date} = this.props
        return (
            <div className="business_app">
                <div className="app_header">
                    <span className="app_header_span">{name}</span>
                    <button type="button" className="business_app_buttons" onClick={removeApp}>
                        <img className='images' src={x} alt=""/>
                    </button>
                    <button type="button" className="business_app_buttons" onClick={addApp}>
                        <img className='images' src={checkmark} alt=""/>
                    </button>
                </div>
                <p className="business_app_text">
                    {message} <br/>
                    Email: {email} <br/>
                    Date Applied: {date}
                </p>

            </div>
        );
    }
}

export default BusinessApp;