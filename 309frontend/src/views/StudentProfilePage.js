import React from "react"

import Link from "../components/Link";
import Header from "../components/Header";
import ProfileInformation from "../components/ProfileInformation";
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";
import InputInfoStudent from "../components/InputInfoStudent";

class StudentProfile extends React.Component {

    state = {
        user: {},
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
        posts: [],
        message: "",
        current_usernames: []
    }

    /* Update the state when user types in information. */
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    /* Updates the information of the current user. */
    updateInfo = (event) => {
        event.preventDefault()
        if (this.state.password !== this.state.user.password || this.state.confirmation !== this.state.password) {
            this.setState({message: "Invalid password."})
        } else if (this.state.username !== this.state.user.username &&
            this.state.current_usernames.includes(this.state.username)) {
            this.setState({message: "Username already taken."})
        } else {
            this.setState({
                user: {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    password: this.state.password
                },
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                confirmation: "",
                message: ""
            })
        }
    }

    /* Set the state variables upon loading. */
    componentDidMount() {
        window.addEventListener('load', this.getCurrentUser.bind(this));
        window.addEventListener('load', this.getPosts.bind(this));
        window.addEventListener('load', this.getAllUsers.bind(this));
    }

    /* Get the current user's data. */
    getCurrentUser() {
        this.setState({
            // for phase 2 this information will come from a server.
            user: {
                firstname: "John",
                lastname: "Smith",
                username: "user",
                password: "user"
            }
        })
    }

    /* Get a list of all the current user's posts. */
    getPosts() {
        this.setState({
            posts: [
                {
                    title: "Review 1",
                    business: "Business 1",
                    user: "user",
                    date: "October 26, 2021",
                    content: "*placeholder -- review #1*"
                },
                {
                    title: "Review 2",
                    business: "Business 2",
                    user: "user",
                    date: "November 7, 2021",
                    content: "*placeholder -- review #2*"
                }
            ]
        })
    }

    /* Get all usernames currently in the system. */
    getAllUsers() {
        // for phase 2 this information will come from a server
        this.setState({
            current_usernames: ["user", "user2", "admin"]
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/" name="Browse"/>
                    <Link name="user"/>
                </Header>

                <div className='postsContainer'>
                    <h3>CURRENT PROFILE INFORMATION</h3>
                    <ProfileInformation firstname={this.state.user.firstname}
                                        lastname={this.state.user.lastname}
                                        username={this.state.user.username}/>
                    <h3>EDIT PROFILE</h3>
                    <InputInfoStudent firstname={this.state.firstname}
                                      lastname={this.state.lastname}
                                      username={this.state.username}
                                      password={this.state.password}
                                      confirmation={this.state.confirmation}
                                      onChange={this.handleInputChange}
                                      onClick={this.updateInfo}/>
                    <span className="red small"> {this.state.message}</span>
                </div>
                <div>
                    <div className='postsContainer'>
                        <h3>MY COMMENTS / REVIEWS</h3>
                        {this.state.posts.map((post) => {
                            return <Comment username={post.user} profile={defaultProfile} content={post.content}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile