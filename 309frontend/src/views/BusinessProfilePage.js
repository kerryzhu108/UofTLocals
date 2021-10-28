import React from 'react';
import Header from "../components/Header";
import Container from "../components/Container";
import Link from "../components/Link";
import BusinessProfile from '../components/BusinessProfile';
import Comment from '../components/Comment';
import AnnouncementBox from '../components/AnnouncementBox';

import defaultProfile from "../images/default-profile.png";

import "../css/RoundedBox.css";
import "../css/BusinessProfilePage.css";

class BusinessProfilePage extends React.Component {

    render() {

        var customerComments = [
            {
                username: "Sleep Deprived UofT Student",
                content: "Who needs time management when you have Caffeine Corner? Am I right or am I right?"
            },
            {
                username: "Happy Customer",
                content: "Hello there, just commenting on how much I absolutely love your business. It does everything and more!"
            },
            {
                username: "Happy Customer #2",
                content: "I'd just like to mention that this is the best business ever!"
            }
        ]

        var announcements = [
            "We'd just like to thank all of our loyal customers by granting 51% off all merchandise. Thanks for sticking with us!"
        ]

        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                    <Link name="Login/Signup" />
                </Header>
                <Container>
                    <BusinessProfile name={this.props.name} image="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <p>Do you like coffee? Do you like caffeine? This is the place for you!<br /><br />

                            Pull another all-nighter with us and get that assignment finished.
                        </p>
                    </BusinessProfile>
                    <div className="info-section">
                        <AnnouncementBox name="Announcements">
                            {announcements.map(comment => (
                                <Comment username={this.props.name} profile={defaultProfile} content={comment} />
                            ))}
                        </AnnouncementBox>
                        <AnnouncementBox name="Comments">
                            {customerComments.map(comment => (
                                <Comment username={comment.username} profile={defaultProfile} content={comment.content} />
                            ))}
                        </AnnouncementBox>
                    </div>
                </Container>
            </div >
        );
    }
}

export default BusinessProfilePage;