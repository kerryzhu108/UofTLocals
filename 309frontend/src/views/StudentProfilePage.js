import React from "react"

import Link from "../components/Link";
import Header from "../components/Header";
import ProfileInformation from "../components/ProfileInformation";
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";
import InputInfoStudent from "../components/InputInfoStudent";
import { withRouter } from "react-router";

import { getComments, getStudent } from "../apis/student";
import { updateLoginForm } from "../apis/login";

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
        let id = this.props.match.params.id
        // get the current student's data and set the state
        const student = await getStudent(id)
        if (!student) {
            console.log("This student cannot be found.")
            return
        }
        const comments = await getComments(id)
        if (!comments) {
            console.log("This student's comments cannot be found.")
            return
        }
        this.setState({
            firstname: student.first_name,
            lastname: student.last_name,
            username: student.email,
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
                        onClick={ () => console.log('helloo') }/>
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

export default withRouter(StudentProfile);