import React from "react";

import "../css/RoundedBox.css";
import "../css/BusinessProfile.css";

class BusinessProfile extends React.Component {
    render() {
        return (
            <div className="root rounded-box">
                <div className="gallery-section">
                    <h1>{this.props.name}</h1>
                    <img className="gallery" src={this.props.image} alt="" />
                </div>
                <div className="information-section">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default BusinessProfile;