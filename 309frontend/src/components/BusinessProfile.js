import React from "react";

import "../css/RoundedBox.css";
import "../css/BusinessProfile.css";

class BusinessProfile extends React.Component {
    render() {
        return (
            <div class="root rounded-box">
                <div class="gallery-section">
                    <h1>{this.props.name}</h1>
                    <img class="gallery" src={this.props.image} alt="" />
                </div>
                <div class="information-section">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default BusinessProfile;