import React from "react";

import "../css/Post.css";
import "../css/BusinessStyling.css";
import x from "../images/x.png";

class Post extends React.Component {
    render() {
        const { name, message, removePost, date } = this.props
        return (
            <div className="post">
                <div className="post_header">
                    <div className="app_header_span">{name}</div>
                    <button type="button" className="business_app_buttons" onClick={removePost}>
                        <img className='images' src={x} alt=""/>
                    </button>
                </div>
                <p className="business_app_text">
                    {message} <br/>
                    Date Posted: {date}
                </p>
            </div>
        );
    }
}

export default Post;