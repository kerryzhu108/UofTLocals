import React from "react";

import "../css/Comment.css";
import "../css/InputButtonCombo.css"

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showReply: true,
            replyText: "@" + props.username + ' '
        };
    }

    changeReplyText(event) {
        this.setState({replyText: event.target.value})
    }

    render() {
        return (
            <div className="comment-box">
                <div className="comment-header">
                    <img className="profile" src={this.props.profile} alt="" />
                    <h1 className="username">{this.props.username}</h1>
                </div>
                { this.props.isOwner && <img className="reply" src={this.props.replyBtn} onClick={()=>{this.setState({showReply: !this.state.showReply})}} alt=""/> } 
                { this.state.showReply && <div className="input-button-combo">
                    <textarea
                    value={this.state.replyText}
                    type="text"
                    onChange={this.changeReplyText.bind(this)}
                    />
                    <button className="orange straight" onClick={()=>{this.props.submitReply(this.state.replyText, this.props.commentid)}}>Submit</button>
                    <button className="orange" onClick={()=>{this.setState({showReply: !this.state.showReply})}}>Cancel</button>
                </div>}
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Comment;