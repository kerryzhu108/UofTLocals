import React from "react";

import "../css/Post.css";
import "../css/BusinessStyling";
import x from "../images/x.png";

class Post extends React.Component {
    render() {
        const { name, message } = this.props
        return (
            <div className="post">
                <div className="post_header">
                    <div className="app_header_span">{name}</div>
                    <button type="button" className="business_app_buttons">
                        <img className='images' src={x} />
                    </button>
                </div>
                <p className="business_app_text">
                    {message}
                </p>
            </div>
        );
    }
}

export default Post;