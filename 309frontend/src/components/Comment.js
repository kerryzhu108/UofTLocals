import React from "react";

import "../css/Comment.css";

class Comment extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <div className="comment-header">
                    <img className="profile" src={this.props.profile} alt="" />
                    <h1 className="username">{this.props.username}</h1>
                </div>
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Comment;