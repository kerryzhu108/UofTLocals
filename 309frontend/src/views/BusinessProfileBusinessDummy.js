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

class BusinessProfileBusinessDummy extends React.Component {

    state = {
        comments: [],
        announcements: [],
        commentValue: {},
        announcementValue: {}
    };

    handleAnnouncementChange = (event) => {
        this.setState({ announcementValue: event.target.value });
    }

    submitAnnouncement = (event) => {
        let announcements = this.state.announcements;
        announcements.push({ username: "user2", content: this.state.announcementValue });
        this.setState({ announcements: announcements });
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/landing-business" active="true" name="Browse" />
                    <Link href="/business-profile-user2" name="user2" />
                </Header>
                <Container>
                    <BusinessProfile name={this.props.name} image="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <p>Do you like coffee? Do you like caffeine? This is the place for you!<br /><br />

                            Pull another all-nighter with us and get that assignment finished.
                        </p>
                    </BusinessProfile>
                    <div className="info-section">
                        <AnnouncementBox name="Announcements">
                            <InputButtonCombo color="orange" onClick={this.submitAnnouncement} buttonName="Post" onChange={this.handleAnnouncementChange} />
                            {this.state.announcements.slice(0).reverse().map(announcement => (
                                <Comment username={announcement.username} profile={defaultProfile} content={announcement.content} />
                            ))}
                        </AnnouncementBox>
                        <AnnouncementBox name="Comments">
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

export default BusinessProfileBusinessDummy;