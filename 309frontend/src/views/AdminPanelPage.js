import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import "../css/AdminPageStyling.css";
import BusinessApp from "../components/BusinessApp"
import Businesses from "../components/Businesses"
import Post from "../components/Post";
import SearchForm from "../components/SearchForm";
import { acceptApp, denyApp, removeBusiness, removePost, sortation } from "../actions/AdminPosts";


class AdminPanel extends React.Component {

    state = {
        business_applications: [
            {
                name: "Tom's Turntable",
                email: "turntable@gmail.com",
                date: "Oct 28 2021",
                content: "Studies have shown that majority of students rely on music in order to help them through the day, and Tom's Turntable has you covered! We offer a handy selection of various genres and music devices, from vinyls to CDs. Music is just one of the many ways people can express themselves, and we aim to bring out the true colours in all students!",
                link: "/business-profile-user"
            },
            {
                name: "Slurpy Slushies",
                email: "slushies@yahoo.ca",
                date: "Oct 26 2021",
                content: "Slurpy Slushies are your local cold drink experts! From slushies to smoothies, we cover all the bases, offering clients a wide selection of flavours and combinations. As an up and coming business, we aim to provide students with door dropping discounts when they advertise their experience at our location on social media!",
                link: "/business-profile-user"
            }
        ],
        businesses: [
            {
                name: "U of T Bookstore",
                email: "bookstore@utoronto.ca",
                date: "Oct 12 2021",
                content: "The number one shopping spot for UofT students looking for all their textbooks! Founded as a sublet of the University of Toronto Press in 1934, the shop has since been the one stop location for all books, supplies, and school merchandise that any student would require. Located at 214 College Street, Toronto, Ontario, Postal Code M5T 3A1.",
                link: "/business-profile-user"
            },
            {
                name: "Medical Science Cafeteria",
                email: "medsci@utoronto.ca",
                date: "Oct 10 2021",
                content: "Located on the Southeast side of campus, the Medical Science Cafeteria is one of the highest volume catering locations at UofT. Here, students can enjoy a wide selection of foods freshly served from our local providers. Located at 1 King's College Circle, Toronto, Ontario, Postal Code M5S 1A8.",
                link: "/business-profile-user"
            },
            {
                name: "Chatime College Street",
                email: "chatime@customer_service.com",
                date: "Nov 1 2021",
                content: "Introducing our newest location: Chatime at College Street! Chatime is renouned globally for being one of the most successful bubble tea providers out there. Our newest location intends to provide students on campus with easily accessible bubble tea whenever they are craving it! Located at 199 College Street, Toronto, Ontario.",
                link: "/business-profile-user"
            }
        ],
        posts: [
            {
                name: "U of T Bookstore",
                content: "Year opening sale! Students can get 25% off of all varisty mechandising! Furthermore, textbooks are promoted at buy one get one 10% off! Valid while supplies last and for the first 2 weeks of class.",
                date: "Oct 15 2021"
            },
            {
                name: "Medical Science Cafeteria",
                content: "Eat healthy! Students can enjoy a buy one get one 50% off discount on selected products marked \"Healthy\". Promotion valid once per purchase per student.",
                date: "Oct 20 2021"
            }, {
                name: "Chatime College Street",
                content: "Our 'Grand Opening 2.0' deal! Now that we are back from COVID, buy one large tea and get a voucher for a free medium tea upon future visit. Limit one per customer.",
                date: "Nov 1 2021"
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
        this.setState({ type: event.target.value });
        const val = event.target.value;
        sortation(val, event, this)
    }



    render() {
        return (
            <div>
                <Header>
                    <Link href="/landing-user" name="Browse" />
                    <Link href="/" name="Logout"/>
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
                                <option value="DateNew">Date (Newest to Oldest)</option>
                                <option value="DateOld">Date (Oldest to Newest)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.apps_search} onChange={this.filterApps.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        {this.state.business_applications.map((business) => {
                            if (business.name.toLocaleLowerCase().includes(this.state.apps_search.toLowerCase())) {
                                return <BusinessApp name={business.name} message={business.content} removeApp={() => denyApp(this, business)} addApp={() => acceptApp(this, business)} email={business.email} date={business.date} />
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
                                <option value="DateNew">Date (Newest to Oldest)</option>
                                <option value="DateOld">Date (Oldest to Newest)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.businesses_search} onChange={this.filterBus.bind(this)} classType="search_form"></SearchForm>
                        </div>
                        {this.state.businesses.map((business) => {
                            if (business.name.toLocaleLowerCase().includes(this.state.businesses_search.toLowerCase())) {
                                return <Businesses name={business.name} message={business.content} email={business.email} removeBus={() => removeBusiness(this, business)} link={business.link} date={business.date} />
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
                                <option value="DateNew">Date (Newest to Oldest)</option>
                                <option value="DateOld">Date (Oldest to Newest)</option>
                            </select>
                            <SearchForm name="Businesses-Search" value={this.state.posts_search} onChange={this.filterPosts.bind(this)} classType="search_form2"></SearchForm>
                            {this.state.posts.map((post) => {
                                if (post.name.toLocaleLowerCase().includes(this.state.posts_search.toLowerCase())) {
                                    return <Post name={post.name} message={post.content} removePost={() => removePost(this, post)} date={post.date} />
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