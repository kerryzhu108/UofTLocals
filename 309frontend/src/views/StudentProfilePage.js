import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import InputField from '../components/InputField'
import "../css/StudentProfile.css"
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";

class StudentProfile extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmation: "",
        posts: [
            {   title: "Review 1", 
                business: "Business 1", 
                user: "User 1", 
                date: "October 26, 2021", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at"
            }
        ]
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                    <Link name="Login/Signup" />
                </Header>
                <div class='postsContainer'>
                    <h2> PROFILE INFORMATION </h2>
                    <form>
                        <table className='inputable'>
                                <InputField label="First name"
                                            value={ this.state.firstname }
                                            onChange={ this.handleInputChange }
                                            name="firstname">
                                </InputField>
                                <InputField label="Last name"
                                            value={ this.state.lastname }
                                            onChange={ this.handleInputChange }
                                            name="lastname">
                                </InputField>
                                <InputField label="Username"
                                            value={ this.state.username }
                                            onChange={ this.handleInputChange }
                                            name="username">
                                </InputField>
                                <InputField label="Password"
                                            value={ this.state.password }
                                            onChange={ this.handleInputChange }
                                            name="password">
                                </InputField>
                                <InputField label="Confirm Password"
                                            value={ this.state.confirmation }
                                            onChange={ this.handleInputChange }
                                            name="confirmation">
                                </InputField>
                                <tr>
                                    <td>
                                        <p className="grey small">
                                            <span className="red">*</span> = required information 
                                        </p>
                                    </td>
                                    <td>
                                        <input id="confirmButtonStudent" type="submit" value="Update My Information"/>
                                    </td>
                                </tr>
                        </table>
                    </form>
                </div>
                <div>
                    <div class='postsContainer'>
                        <h2>COMMENTS / REVIEWS</h2>
                        <Comment username={this.state.posts[0].user} profile={defaultProfile} content={this.state.posts[0].content} />

                        <div class='post'>
                            <input class="removeButton" type="submit" value="X"></input>
                            <h3>{ this.state.posts[0].title }</h3>
                            <h5>Reviewed: { this.state.posts[0].business }</h5>
                            <h5>Posted by: { this.state.posts[0].user }</h5>
                            <h5>Date: { this.state.posts[0].date }</h5>
                            <span class="grey content">{ this.state.posts[0].content }</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile