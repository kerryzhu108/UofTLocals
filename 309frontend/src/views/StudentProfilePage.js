import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import "../css/StudentProfile.css"
import Comment from '../components/Comment';
import defaultProfile from "../images/default-profile.png";

class StudentProfile extends React.Component {

    state = {
        firstname: "John",
        lastname: "Smith",
        username: "user",
        password: "user",
        posts: [
            {
                title: "Review 1",
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
                    <a href="/login">Login/Signup</a>
                </Header>
                <div className='postsContainer'>
                    <h2> PROFILE INFORMATION </h2>
                    <table>
                        <tr>
                            <td><label>First name: <span className="red">*</span></label></td>
                            <td><input name="firstname" value={ this.state.firstname } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Last name: <span className="red">*</span></label></td>
                            <td><input name="lastname" value={ this.state.lastname } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Username: <span className="red">*</span></label></td>
                            <td><input name="username" value={ this.state.username } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: <span className="red">*</span></label></td>
                            <td><input name="password" value={ this.state.password } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Confirm password: <span className="red">*</span></label></td>
                            <td><input name="confirmation" value={ this.state.confirmation } onChange={ this.handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><p className="grey small"><span className="red">*</span> required information</p></td>
                            <td><input  id="confirmButtonStudent" type="submit" value="Update information" onClick={ this.addStudent }/></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <div className='postsContainer'>
                        <h2>COMMENTS / REVIEWS</h2>
                        <Comment username={this.state.posts[0].user} profile={defaultProfile} content={this.state.posts[0].content}/>
                        <Comment username={this.state.posts[0].user} profile={defaultProfile} content={this.state.posts[0].content}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile