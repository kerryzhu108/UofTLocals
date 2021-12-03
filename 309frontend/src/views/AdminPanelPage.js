import React from "react"
import Link from "../components/Link";
import Header from "../components/Header";
import "../css/AdminPageStyling.css";
import BusinessApp from "../components/BusinessApp"
import Businesses from "../components/Businesses"
import Post from "../components/Post";
import SearchForm from "../components/SearchForm";
import { acceptApp, denyApp, removeBusiness, removePost, sortation } from "../actions/AdminPosts";
import { getAnnouncements, getBusinesses } from '../apis/business.js'


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
        businesses: [],
        posts: [],
        apps_search: '',
        businesses_search: '',
        posts_search: '',
        type: ''
    }

    componentDidMount() {
        // fetch('http://localhost:5000/business/all', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     mode: 'cors',
        //     cache: 'default',
        //     body: JSON.stringify()
        // }).then((response) => response.json()).then(bus_list => {
        //     // Should work?
        //     for (var i = 0; i < bus_list.length; i++){
        //         for (var j = 0; j < bus_list[i].announcements.length; j++) {
        //             this.state.posts.push({name: bus_list[i].name, content: bus_list[i].announcements[j], date: "19"})
        //         }
        //     }
        //     this.setState({ businesses: bus_list})
        // })
        window.addEventListener('load', this.fetchResturants.bind(this))
    }

    async fetchResturants() {
        let activeBusinesses = []
        const businesses = await getBusinesses()
        console.log(businesses)
        businesses.forEach((business)=>{
            activeBusinesses.push({name: business['name'], type: business['type'], content: business['description'], id: business['_id'], email: business['email'], date: business['dateCreated']})
        })
        this.setState({businesses: activeBusinesses})
        let activePosts = []
        const posts = await getAnnouncements()
        console.log(posts)
        posts.forEach((post) => {            
            activePosts.push({name: post['poster_name'], content: post['content'], id: post['_id'], parent_id: post['poster'], date: post['date']})
        })
        this.setState({posts: activePosts})
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
                                // Posts don't have these fields anymore, need to fix
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