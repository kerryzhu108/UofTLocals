import React from "react"
import Cookies from "universal-cookie";

import Link from "../components/Link";
import Header from "../components/Header";
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";
import InputInfoStudent from "../components/InputInfoStudent";

import { getComments } from "../apis/student";
import { updateLoginForm } from "../apis/login";
import { getProfile } from "../apis/profile";

class StudentProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "Unknown",
            lastname: "Unknown",
            username: "Unknown",
            password: "",
            confirmation: "",
            comments: [],
        }
    }

    async componentDidMount() {
        // get the current (student) user's data
        const cookies = new Cookies()
        const access_token = cookies.get("access_token")
        const user_information = await getProfile(access_token)
        const comments = await getComments(user_information.id)
        if (!comments) {
            console.log("This student's comments cannot be found.")
            return
        }
        // set the state with the retrieved information
        this.setState({
            firstname: user_information.firstname,
            lastname: user_information.lastname,
            username: user_information.email,
            comments: comments
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link href="/landing-user" name="Browse"/>
                    <Link name="user"/>
                    <Link href="/" name="logout"/>
                </Header>

                <div className='postsContainer'>
                    <h3>Edit My Profile</h3>
                    <InputInfoStudent 
                        firstname={ this.state.firstname }
                        lastname={ this.state.lastname }
                        username={ this.state.username }
                        password={ this.state.password }
                        confirmation={ this.state.confirmation }
                        onChange={ e => updateLoginForm(this, e.target) }
                        onClick={ () => console.log('patch route here') }/>
                </div>
                <div>
                    <div className='postsContainer'>
                        <h3>My Comments and Reviews</h3>
                        { this.state.comments.map((comment) => {
                            return <Comment 
                                        username={ comment.user }
                                        profile={ defaultProfile }
                                        content={ comment.content }/>
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;