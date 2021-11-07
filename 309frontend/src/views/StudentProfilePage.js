import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import ProfileInformation from "../components/ProfileInformation";
import "../css/StudentProfile.css"
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";
import StudentInputInfo from "../components/StudentInputInfo";

class StudentProfile extends React.Component {

    state = {
        // existing user data
        user: {
            firstname: "John",
            lastname: "Smith",
            username: "user",
            password: "user"
        },

        // new user data
        firstname: "",
        lastname: "",
        username: "",
        password: "",

        // user posts (separate from user info)
        posts: [
            {
                title: "Review 1",
                business: "Business 1", 
                user: "User 1", 
                date: "October 26, 2021", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at"
            }
        ],

        confirmation: "",
        message: "",

        /* for phase 2, we will instead need to get a list of all current usernames from the server */
        current_usernames: ["user", "user2", "admin"]
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
        if (this.state.password !== this.state.user.password)  {
            this.setState({ message: "Invalid password."})
        } else if (this.state.username !== this.state.user.username &&
            this.state.current_usernames.includes(this.state.username)) {
            this.setState({ message: "Username already taken." })
        } else {
            this.setState({
                user: {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                    <a href="/login">Login/Signup</a>
                </Header>

                <div className='postsContainer'>
                    <h3>CURRENT PROFILE INFORMATION</h3>
                    <ProfileInformation firstname={ this.state.user.firstname }
                                        lastname={ this.state.user.lastname }
                                        username={ this.state.user.username}/>
                    <h3>EDIT PROFILE</h3>
                    <StudentInputInfo   firstname={ this.state.firstname }
                                        lastname={ this.state.lastname }
                                        username={ this.state.username }
                                        password={ this.state.password }
                                        confirmation={ this.state.confirmation }
                                        onChange={ this.handleInputChange }
                                        onClick={ this.updateInfo }/>
                    <span className="red small"> { this.state.message }</span>
                </div>
                <div>
                    <div className='postsContainer'>
                        <h3>COMMENTS / REVIEWS</h3>
                        <Comment username={this.state.posts[0].user} profile={defaultProfile} content={this.state.posts[0].content}/>
                        <Comment username={this.state.posts[0].user} profile={defaultProfile} content={this.state.posts[0].content}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile