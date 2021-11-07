import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import "../css/adminpage_style.css";
import BusinessApp from "../components/BusinessApp"
import Businesses from "../components/Businesses"
import Post from "../components/Post";
import SearchForm from "../components/SearchForm";
import { acceptApp, denyApp, removeBusiness, removePost } from "../actions/AdminPosts";


class AdminPanel extends React.Component {

    state = {
        business_applications: [
            {
                name: "Tom's Turntable",
                email: "turntable@gmail.com",
                date: "October 26, 2021",
                content: "Studies have shown that majority of students rely on music in order to help them through the day, and Tom's Turntable has you covered! We offer a handy selection of various genres and music devices, from vinyls to CDs. Music is just one of the many ways people can express themselves, and we aim to bring out the true colours in all students!",
                link: "/business-profile"
            },
            {
                name: "Slurpy Slushies",
                email: "slushies@yahoo.ca",
                date: "October 26, 2021",
                content: "Slurpy Slushies are your local cold drink experts! From slushies to smoothies, we cover all the bases, offering clients a wide selection of flavours and combinations. As an up and coming business, we aim to provide students with door dropping discounts when they advertise their experience at our location on social media!",
                link: "/business-profile"
            }
        ],
        businesses: [
            {
                name: "U of T Bookstore",
                email: "bookstore@utoronto.ca",
                date: "October 10, 2021",
                content: "The number one shopping spot for UofT students looking for all their textbooks! Founded as a sublet of the University of Toronto Press in 1934, the shop has since been the one stop location for all books, supplies, and school merchandise that any student would require. Located at 214 College Street, Toronto, Ontario, Postal Code M5T 3A1.",
                link: "/business-profile"
            },
            {
                name: "Medical Science Cafeteria",
                email: "medsci@utoronto.ca",
                date: "October 10, 2021",
                content: "Located on the Southeast side of campus, the Medical Science Cafeteria is one of the highest volume catering locations at UofT. Here, students can enjoy a wide selection of foods freshly served from our local providers. Located at 1 King's College Circle, Toronto, Ontario, Postal Code M5S 1A8.",
                link: "/business-profile"
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
        posts_search: '',
        type: ''
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
        this.setState({ apps_search: event.target.value });
    }

    filterBus(event) {
        this.setState({ businesses_search: event.target.value });
    }

    filterPosts(event) {
        this.setState({ posts_search: event.target.value });
    }

    filterType(event) {
        this.setState({type: event.target.value});
        if (event.target.value === "(A-Z)") {
            if (event.target.id === "apps") {
                this.state.business_applications.sort((a,b) => a.name.localeCompare(b.name))
            } else if (event.target.id === "bus") {
                this.state.businesses.sort((a,b) => a.name.localeCompare(b.name))
            } else if (event.target.id === "posts") {
                this.state.posts.sort((a,b) => a.name.localeCompare(b.name))
            }
        } else {
            if (event.target.id === "apps") {
                this.state.business_applications.sort((a,b) => a.name.localeCompare(b.name))
                this.state.business_applications.reverse()
            } else if (event.target.id === "bus") {
                this.state.businesses.sort((a,b) => a.name.localeCompare(b.name))
                this.state.businesses.reverse()
            } else if (event.target.id === "posts") {
                this.state.posts.sort((a,b) => a.name.localeCompare(b.name))
                this.state.posts.reverse()
            } 
        }
    }



    render() {
        return (
            <div>
                <Header>
                    <Link href="/" name="Browse" />
                    <Link href="/login" name="Login/Signup" />
                </Header>
                <div className="panel_title">
                    <strong className="panel_title_text">ADMIN PANEL</strong>
                </div>
                <div className="panel_container">
                    <div className="panel_subcontainer_left">
                        <div>
                            <strong className="subcontainer_title">BUSINESS APPLICATIONS</strong>
                            <select id="apps" className="select_button" onChange={this.filterType.bind(this)} defaultValue="Default">
                                <option value="Default" disabled>ORDER BY</option>
                                <option value="(A-Z)">Name (A-Z)</option>
                                <option value="(Z-A)">Name (Z-A)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.apps_search} onChange={this.filterApps.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        {this.state.business_applications.map((business) => {
                            if (business.name.toLocaleLowerCase().includes(this.state.apps_search.toLowerCase())) {
                                return <BusinessApp name={business.name} message={business.content} removeApp={() => denyApp(this, business)} addApp={() => acceptApp(this, business)} email={business.email} />
                            }
                            return null;
                        })}
                    </div>
                    <div className="panel_subcontainer_right">
                        <div>
                            <strong className="subcontainer_title">BUSINESSES</strong>
                            <select id="bus" className="select_button" onChange={this.filterType.bind(this)} defaultValue={"Default"}>
                                <option value="Default" disabled>ORDER BY</option>
                                <option value="(A-Z)">Name (A-Z)</option>
                                <option value="(Z-A)">Name (Z-A)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.businesses_search} onChange={this.filterBus.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        {this.state.businesses.map((business) => {
                            if (business.name.toLocaleLowerCase().includes(this.state.businesses_search.toLowerCase())) {
                                return <Businesses name={business.name} message={business.content} email={business.email} removeBus={() => removeBusiness(this, business)} link={business.link} />
                            }
                            return null;
                        })}
                    </div>
                    <div className="posts_div">
                        <div>
                            <strong className="subcontainer_title">POSTS</strong>
                            <select id="posts" className="select_button" onChange={this.filterType.bind(this)} defaultValue={"Default"}>
                                <option value="Default" disabled>ORDER BY</option>
                                <option value="(A-Z)">Name (A-Z)</option>
                                <option value="(Z-A)">Name (Z-A)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.posts_search} onChange={this.filterPosts.bind(this)} classType="search_form2"></SearchForm>
                            {this.state.posts.map((post) => {
                                if (post.name.toLocaleLowerCase().includes(this.state.posts_search.toLowerCase())) {
                                    return <Post name={post.name} message={post.content} removePost={() => removePost(this, post)} />
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel