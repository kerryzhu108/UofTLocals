import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import "../css/adminpage_style.css";
import BusinessApp from "../components/BusinessApp"
import Businesses from "../components/Businesses"
import Post from "../components/Post";
import SelectButton from "../components/SelectButton";
import SearchForm from "../components/SearchForm";
import { acceptApp, denyApp, removeBusiness } from "../actions/AdminPosts";

class AdminPanel extends React.Component {

    state = {
        business_applications: [
            {
                name: "Tom's Turntable",
                email: "turntable@gmail.com",
                date: "October 26, 2021",
                content: "Studies have shown that majority of students rely on music in order to help them through the day, and Tom's Turntable has you covered! We offer a handy selection of various genres and music devices, from vinyls to CDs. Music is just one of the many ways people can express themselves, and we aim to bring out the true colours in all students!"
            },
            {
                name: "Slurpy Slushies",
                email: "slushies@yahoo.ca",
                date: "October 26, 2021",
                content: "Slurpy Slushies are your local cold drink experts! From slushies to smoothies, we cover all the bases, offering clients a wide selection of flavours and combinations. As an up and coming business, we aim to provide students with door dropping discounts when they advertise their experience at our location on social media!"
            }
        ],
        businesses: [
            {
                name: "U of T Bookstore",
                email: "bookstore@utoronto.ca",
                date: "October 10, 2021",
                content: "The number one shopping spot for UofT students looking for all their textbooks! Founded as a sublet of the University of Toronto Press in 1934, the shop has since been the one stop location for all books, supplies, and school merchandise that any student would require. Located at 214 College Street, Toronto, Ontario, Postal Code M5T 3A1."
            },
            {
                name: "Medical Science Cafeteria",
                email: "medsci@utoronto.ca",
                date: "October 10, 2021",
                content: "Located on the Southeast side of campus, the Medical Science Cafeteria is one of the highest volume catering locations at UofT. Here, students can enjoy a wide selection of foods freshly served from our local providers. Located at 1 King's College Circle, Toronto, Ontario, Postal Code M5S 1A8."
            }
        ],
        posts: [
            {
                name: "U of T Bookstore",
                content: "Year opening sale! Students can get 25% off of all varisty mechandising! Furthermore, textbooks are promoted at buy one get one 10% off! Valid while supplies last and for the first 2 weeks of class.",
                date: "October 15th, 2021"
            },
            {
                name: "Medical Science Cafeteria",
                content: "Eat healthy! Students can enjoy a buy one get one 50% off discount on selected products marked \"Healthy\". Promotion valid once per purchase per student.",
                date: "October 20th, 2021"
            }
        ],
        apps_search: '',
        businesses_search: '',
        posts_search: ''
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    filterApps(event) {
        this.setState({apps_search: event.target.value});
    }

    filterBus(event) {
        this.setState({businesses_search: event.target.value});
    }

    filterPosts(event) {
        this.setState({posts_search: event.target.value});
    }



    render() {
        return (
            <div>
                <Header>
                    <Link active="true" name="Browse" />
                    <Link name="Login/Signup" />
                </Header>
                <div className="panel_title">
                    <STRONG className="panel_title_text">ADMIN PANEL</STRONG>
                </div>
                <div className="panel_container">
                    <div className="panel_subcontainer_left">
                        <div>
                            <strong className="subcontainer_title">BUSINESS APPLICATIONS</strong>
                            <SelectButton onChange={this.state.business_applications.sort(function(a,b){
                                return a.name.localeCompare(b.name)
                            })}></SelectButton>
                            <SearchForm name="Businesses-Search" value="SEARCH" onChange={this.filterApps.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        <BusinessApp name={this.state.business_applications[0].name} message={this.state.business_applications[0].content} removeApp={()=>denyApp(this)} addApp={()=>acceptApp(this)}></BusinessApp>
                        <BusinessApp name={this.state.business_applications[1].name} message={this.state.business_applications[1].content} removeApp={()=>denyApp(this)} addApp={()=>acceptApp(this)}></BusinessApp>
                    </div>
                    <div className="panel_subcontainer_right">
                        <div>
                            <strong className="subcontainer_title">BUSINESSES</strong>
                            <SelectButton onChange={this.state.business_applications.sort(function(a,b){
                                return a.name.localeCompare(b.name)
                            })}></SelectButton>
                            <SearchForm name="Businesses-Search" value="SEARCH" onChange={this.filterBus.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        <Businesses> name={this.state.businesses[0].name} message={this.state.businesses[0].content} email={this.state.businesses[0].email} removeBus={()=>removeBusiness(this)}</Businesses>
                        <Businesses> name={this.state.businesses[1].name} message={this.state.businesses[1].content} email={this.state.businesses[1].email} removeBus={()=>removeBusiness(this)}</Businesses>
                    </div>
                    <div className="posts_div">
                        <div>
                            <strong className="subcontainer_title">POSTS</strong>
                            <SelectButton onChange={this.state.business_applications.sort(function(a,b){
                                return a.name.localeCompare(b.name)
                            })}></SelectButton>
                            <SearchForm name="Businesses-Search" value="SEARCH" onChange={this.filterPosts.bind(this)} classType="search_form2"></SearchForm>
                            <Post name={this.state.posts[0].name} message={this.state.posts[0].content}></Post>
                            <Post name={this.state.posts[1].name} message={this.state.posts[1].content}></Post>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel