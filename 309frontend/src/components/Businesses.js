import React from "react";

import "../css/BusinessStyling.css";
import x from "../images/x.png";

class Businesses extends React.Component {
    render() {
        const { name, message, email, removeBus, link} = this.props
        return (
            <div className="business_app">
                <div className="app_header">
                    <span className="app_header_span">{name}</span>
                    <button type="button" className="business_app_buttons" onClick={removeBus}>
                        <img className='images' src={x} alt=""/>
                    </button>
                    <a className="email_button" href={link}>
                        Profile Link
                    </a>
                </div>
                <p className="business_app_text">
                    {message}<br/>
                    Email: {email}
                </p>
            </div>
        );
    }
}

export default Businesses;