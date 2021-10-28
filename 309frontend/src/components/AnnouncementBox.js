import React from 'react';

import "../css/AnnouncementBox.css";
import "../css/RoundedBox.css"

class AnnouncementBox extends React.Component {
    render() {
        return (
            <div className="announcement-box rounded-box">
                <div className="header">
                    <h1>{this.props.name}</h1>
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default AnnouncementBox;