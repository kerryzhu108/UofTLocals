import React from 'react';
import Header from "../components/Header";
import Container from "../components/Container";
import Link from "../components/Link";
import BusinessProfile from '../components/BusinessProfile';
import Comment from '../components/Comment';
import AnnouncementBox from '../components/AnnouncementBox';

import defaultProfile from "../images/default-profile.png";
import InputButtonCombo from '../components/InputButtonCombo';

import "../css/RoundedBox.css";
import "../css/BusinessProfilePage.css";

class BusinessProfileUserDummy extends React.Component {

    state = {
        comments: [],
        announcements: [],
        commentValue: {},
        announcementValue: {}
    };

    handleCommentChange = (event) => {
        this.setState({ commentValue: event.target.value });
    }

    handleAnnouncementChange = (event) => {
        this.setState({ announcementValue: event.target.value });
    }

    submitComment = (event) => {
        let comments = this.state.comments;
        comments.push({ username: "user", content: this.state.commentValue });
        this.setState({ comments: comments });
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/landing-user" name="Browse" />
                    <Link href="/student-profile" name="user" />
                    <Link href="/" name="Logout" />
                </Header>
                <Container>
                    <BusinessProfile name={this.props.name} image="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <p>Do you like coffee? Do you like caffeine? This is the place for you!<br /><br />

                            Pull another all-nighter with us and get that assignment finished.
                        </p>
                    </BusinessProfile>
                    <div className="info-section">
                        <AnnouncementBox name="Announcements">
                            {this.state.announcements.slice(0).reverse().map(comment => (
                                <Comment username={this.props.name} profile={defaultProfile} content={comment} />
                            ))}
                        </AnnouncementBox>
                        <AnnouncementBox name="Comments">
                            <InputButtonCombo color="green" onClick={this.submitComment} buttonName="Comment" onChange={this.handleCommentChange} />
                            {this.state.comments.slice(0).reverse().map(comment => (
                                <Comment username={comment.username} profile={defaultProfile} content={comment.content} />
                            ))}
                        </AnnouncementBox>
                    </div>
                </Container>
            </div >
        );
    }
}

export default BusinessProfileUserDummy;