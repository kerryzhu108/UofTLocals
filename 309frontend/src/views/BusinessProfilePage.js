import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import BusinessProfile from "../components/BusinessProfile";
import Comment from "../components/Comment";
import AnnouncementBox from "../components/AnnouncementBox";
import { withRouter } from "react-router";
import InputButtonCombo from "../components/InputButtonCombo";

import defaultProfile from "../images/default-profile.png";
import Cookies from "universal-cookie";

// API related imports
import {
    getBusiness,
    getBusinessComments,
    getBusinessAnnouncements,
    commentOnBusiness,
    addBusinessAnnouncement,
} from "../apis/business";
import { getProfile } from "../apis/profile";

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
            user: null,
            boxText: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
        this.handleBusinessSubmit = this.handleBusinessSubmit.bind(this);
    }

    // Handle text box changes, store them in the state
    handleChange(event) {
        this.setState({ boxText: event.target.value });
    }

    async handleStudentSubmit(event) {
        var currentComments = this.state.comments;

        const cookies = new Cookies();
        const comment = await commentOnBusiness(
            this.props.match.params.id,
            this.state.boxText,
            cookies.get("access_token")
        );

        if (comment) {
            // Received a response, update the frontend
            // with the new information.
            currentComments.push(comment);
            this.setState({ comments: currentComments, boxText: "" });
        }

        event.preventDefault();
    }

    async handleBusinessSubmit(event) {
        var currentAnnouncements = this.state.announcements;

        const cookies = new Cookies();
        const announcement = await addBusinessAnnouncement(
            this.state.boxText,
            cookies.get("access_token")
        );

        if (announcement) {
            currentAnnouncements.push(announcement);
            this.setState({ announcements: currentAnnouncements, boxText: "" });
        }
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

        // Check user type
        const cookies = new Cookies();
        const access_token = cookies.get("access_token");
        const user_information = await getProfile(access_token);

        // Set the state accordingly
        this.setState({
            businessName: business.name,
            businessDescription: business.description,
            comments: comments,
            announcements: announcements,
            user: user_information,
        });

        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <BusinessProfile
                        name={this.state.businessName}
                        image={this.state.businessImage}
                    >
                        <p>{this.state.businessDescription}</p>
                    </BusinessProfile>
                    <div className="info-section">
                        <AnnouncementBox name="Announcements">
                            {this.state.user &&
                                this.state.user.type === "business" &&
                                this.props.match.params.id ===
                                    this.state.user.id && (
                                    <InputButtonCombo
                                        value={this.state.boxText}
                                        buttonName="Post Announcement"
                                        color="orange"
                                        onChange={this.handleChange}
                                        onClick={this.handleBusinessSubmit}
                                    />
                                )}
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
                            {this.state.user &&
                                this.state.user.type === "student" && (
                                    <InputButtonCombo
                                        value={this.state.boxText}
                                        onChange={this.handleChange}
                                        onClick={this.handleStudentSubmit}
                                        buttonName="Post comment"
                                        color="green"
                                    />
                                )}
                            {this.state.comments.map((comment) => (
                                <Comment
                                    key={comment._id}
                                    username={comment.poster.username}
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
