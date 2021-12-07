import React from "react"
import Cookies from "universal-cookie";

import Link from "../components/Link";
import Header from "../components/Header";
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";
import InputInfoStudent from "../components/InputInfoStudent";
import ImageUploader from "../components/ImageUploader";

import { getComments, updateProfile } from "../apis/student";
import { updateLoginForm } from "../apis/login";
import { getProfile } from "../apis/profile";

class StudentProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "Unknown",
            lastname: "Unknown",
            email: "Unknown",
            username: "Unknown",
            id: "",
            password: "",
            confirmation: "",
            comments: [],
            imageURL: "",
        }
    };

    async componentDidMount() {
        // get the current (student) user's data
        const cookies = new Cookies()
        const access_token = cookies.get("access_token")
        const user_information = await getProfile(access_token)
        const comments = await getComments(user_information.id)
        if (!comments) {
            return
        }
        // set the state with the retrieved information
        this.setState({
            firstname: user_information.firstname,
            lastname: user_information.lastname,
            email: user_information.email,
            username: user_information.name,
            comments: comments,
            imageURL: user_information.profileImageURL,
            id: user_information.id,

        })
    }

    async updateStudentProfile(app, event) {
        const cookies = new Cookies()
        const access_token = cookies.get("access_token")
        console.log(access_token)
        await updateProfile(app, event, access_token)

        const user_information = await getProfile(access_token)
        this.setState({
            firstname: user_information.firstname,
            lastname: user_information.lastname,
            email: user_information.email,
            username: user_information.name
        })
    }

    updateImage(url) {
        this.setState({imageURL: url})
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/landing-user" name="Browse" />
                    <Link name="user" />
                    <Link href="/" name="logout" />
                </Header>

                <div className='postsContainer'>
                    <h1>Welcome, @{ this.state.username }.</h1>
                    <img src={this.state.imageURL} alt="" id="profileImg"/>
                    <h3>Edit My Profile</h3>
                    <p>
                        Please provide the following information to edit your profile.
                        Note that you may not modify your username.
                    </p>
                    <InputInfoStudent
                        update={ true }
                        firstname={ this.state.firstname }
                        lastname={ this.state.lastname }
                        email={ this.state.email }
                        username={ this.state.username }
                        password={ this.state.password }
                        confirmation={ this.state.confirmation }
                        onChange={ e => updateLoginForm(this, e.target) }
                        onClick={ e => this.updateStudentProfile(this, e) }/>
                    
                    <ImageUploader updateImage={this.updateImage.bind(this)} userid={this.state.id} type={"student"}/>
                </div>
                <div>
                    <div className='postsContainer'>
                        <h3>My Comments and Reviews</h3>
                        { this.state.comments.length === 0 ? 
                            <p>You have not posted any comments yet.</p> : 
                            <p>Below is a list of all comments you have made on this site.</p>
                        }    
                        { this.state.comments.map((comment) => (
                            <Comment 
                                key={ comment._id }
                                username={ this.state.username + " for " + comment.business.name }
                                profile={ defaultProfile }
                                content={ comment.content }/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentProfile;
