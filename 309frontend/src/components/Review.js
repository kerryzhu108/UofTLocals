
import React from 'react';
import defaultProfile from "../images/default-profile.png";
import "../css/Comment.css";


class Review extends React.Component {
    getReviewStars() {
        let stars = [];

        for (let i = 0; i < this.props.rating; i++) {
            stars.push(<span className="fa fa-star"></span>);
        }

        for (let i = 0; i < 5 - this.props.rating; i++) {
            stars.push(<span className="fa fa-star-o"></span>);
        }

        return stars;
    }
    
    render() {
        return (
            <div className="comment-box">
                <div className='comment-header'>
                    {this.props.profile != null && <img className="profile" src={this.props.profile || defaultProfile} alt="" />}
                    <h1 className='username'>{this.props.username}</h1>
                </div>
                <div className='content'>
                    <div className='review-stars'>
                        {this.getReviewStars()}
                    </div>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Review;