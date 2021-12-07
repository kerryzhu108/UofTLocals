import React from "react";

import "../css/Comment.css";
import "../css/InputButtonCombo.css"

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showReply: false,
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
                    {this.props.profile && <img className="profile" src={this.props.profile} alt="" /> }
                    <h1 className="username">{this.props.username}</h1>
                </div>
                { this.props.isOwner && <img className="reply" src={this.props.replyBtn} onClick={()=>{this.setState({showReply: !this.state.showReply})}} alt=""/> } 
                { this.state.showReply && <div className="input-button-combo">
                    <textarea
                        value={this.state.replyText}
                        type="text"
                        onChange={this.changeReplyText.bind(this)}
                    />
                    <button className="orange straight" onClick={()=>{
                        this.props.submitReply(this.state.replyText, this.props.commentId)
                        this.setState({showReply: !this.state.showReply})
                    }}>Submit</button>
                    <button className="orange" onClick={()=>{
                        this.setState({showReply: !this.state.showReply})
                    }}>Cancel</button>
                </div>}
                <div className="content">
                    <p>{this.props.content}</p>
                    {
                        this.props.replies && this.props.replies.map(reply=>{
                            let commentAndReplies = []
                            commentAndReplies.push(
                                <div className="comment-box">
                                     <h4 className="username">{this.props.businessName}</h4>
                                    <p>{reply}</p>
                                </div>
                            )
                            return commentAndReplies
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Comment;