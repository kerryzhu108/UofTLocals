import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Link from "../components/Link";
import BusinessProfile from "../components/BusinessProfile";
import Comment from "../components/Comment";
import AnnouncementBox from "../components/AnnouncementBox";
import { withRouter } from "react-router";

import defaultProfile from "../images/default-profile.png";

// API related imports
import {
    getBusiness,
    getBusinessComments,
    getBusinessAnnouncements,
} from "../apis/business";

import "../css/RoundedBox.css";
import "../css/BusinessProfilePage.css";

class BusinessProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businessName: "Unknown",
            businessDescription: "No description",
            businessImage:
                "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            announcements: [],
            comments: [],
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;

        // Fetch data and set the state appropriately
        const business = await getBusiness(id);
        if (!business) {
            console.log("This business could not be found.");
            return;
        }

        // Fetch announcements made by this business

        // Fetch comments from this business
        const comments = await getBusinessComments(id);
        const announcements = await getBusinessAnnouncements(id);

        // Set the state accordingly
        this.setState({
            businessName: business.name,
            businessDescription: business.description,
            comments: comments,
            announcements: announcements,
        });
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/" active="true" name="Browse" />
                    <Link href="/login" name="Login/Signup" />
                </Header>
                <Container>
                    <BusinessProfile
                        name={this.state.businessName}
                        image={this.state.businessImage}
                    >
                        <p>{this.state.businessDescription}</p>
                    </BusinessProfile>
                    <div className="info-section">
                        <AnnouncementBox name="Announcements">
                            {this.state.announcements.map((announcement) => (
                                <Comment
                                    key={announcement._id}
                                    username={announcement.poster.name}
                                    profile={defaultProfile}
                                    content={announcement.content}
                                />
                            ))}
                        </AnnouncementBox>
                        <AnnouncementBox name="Comments">
                            {this.state.comments.map((comment) => (
                                <Comment
                                    key={comment._id}
                                    username={comment.poster.email}
                                    profile={defaultProfile}
                                    content={comment.content}
                                />
                            ))}
                        </AnnouncementBox>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withRouter(BusinessProfilePage);
