import React from "react";
import Header from "../components/Header";
import "../css/AdminPageStyling.css";
import Businesses from "../components/Businesses";
import Post from "../components/Post";
import SearchForm from "../components/SearchForm";
import Cookies from 'universal-cookie';
import {
    removeBusiness,
    removePost,
    sortation,
    myFunc
} from "../actions/AdminPosts";
import {getProfile} from '../apis/profile';
import { getAnnouncements, getBusinesses } from "../apis/business.js";
import help from "../images/help.png";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            posts: [],
            apps_search: "",
            businesses_search: "",
            posts_search: "",
            type: "",
            isLoading: true,
            isAdmin: false
        };
    }

    async componentDidMount() {

        const cookies = new Cookies();
        const profile = await getProfile(cookies.get("access_token"));
        var isAdmin = false;
        console.log(profile);
        if (profile) {
            isAdmin = profile.type === "admin";
        }

        await this.fetchResturants()

        this.setState({isAdmin: isAdmin, isLoading: false});
    }

    async fetchResturants() {
        let activeBusinesses = [];
        const businesses = await getBusinesses();
        businesses.forEach((business) => {
            activeBusinesses.push({
                name: business["name"],
                type: business["type"],
                content: business["description"],
                id: business["_id"],
                email: business["email"],
                date: business["dateCreated"],
                link: "/business/" + business["_id"]
            });
        });
        this.setState({ businesses: activeBusinesses });
        let activePosts = [];
        const posts = await getAnnouncements();
        posts.forEach((post) => {
            activePosts.push({
                name: post["poster_name"],
                content: post["content"],
                id: post["_id"],
                parent_id: post["poster"],
                date: post["date"],
            });
        });
        this.setState({ posts: activePosts });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };

    filterBus(event) {
        this.setState({ businesses_search: event.target.value });
    }

    filterPosts(event) {
        this.setState({ posts_search: event.target.value });
    }

    filterType(event) {
        this.setState({ type: event.target.value });
        const val = event.target.value;
        sortation(val, event, this);
    }

    render() {
        if (this.state.isLoading) return null;
        if (!this.state.isAdmin) return (
            <div>
                <p>Must be an admin user to access this page.</p>
            </div>
        )

        return (
            <div>
                <Header />
                <div className="panel_title">
                    <strong className="panel_title_text">ADMIN PANEL</strong>
                </div>
                <div className="panel_container">
                    <button type="button" className="help_button" onClick={() => myFunc()}>
                        <img className='images2' src={help} alt=""/>
                    </button>
                    <div className="posts_div">
                        <div>
                            <strong className="subcontainer_title">
                                BUSINESSES
                            </strong>
                            <select
                                id="bus"
                                className="select_button"
                                onChange={this.filterType.bind(this)}
                                defaultValue={"Default"}
                            >
                                <option value="Default" disabled>
                                    ORDER BY
                                </option>
                                <option value="(A-Z)">Name (A-Z)</option>
                                <option value="(Z-A)">Name (Z-A)</option>
                                <option value="DateNew">
                                    Date (Newest to Oldest)
                                </option>
                                <option value="DateOld">
                                    Date (Oldest to Newest)
                                </option>
                            </select>
                            <SearchForm
                                name="Businesses-Search"
                                value={this.state.businesses_search}
                                onChange={this.filterBus.bind(this)}
                                classType="search_form"
                            ></SearchForm>
                        </div>
                        {this.state.businesses.map((business) => {
                            if (
                                business.name
                                    .toLocaleLowerCase()
                                    .includes(
                                        this.state.businesses_search.toLowerCase()
                                    )
                            ) {
                                return (
                                    <Businesses
                                        name={business.name}
                                        message={business.content}
                                        email={business.email}
                                        removeBus={() =>
                                            removeBusiness(this, business)
                                        }
                                        link={business.link}
                                        date={business.date}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="posts_div">
                        <div>
                            <strong className="subcontainer_title">
                                POSTS
                            </strong>
                            <select
                                id="posts"
                                className="select_button"
                                onChange={this.filterType.bind(this)}
                                defaultValue={"Default"}
                            >
                                <option value="Default" disabled>
                                    ORDER BY
                                </option>
                                <option value="(A-Z)">Name (A-Z)</option>
                                <option value="(Z-A)">Name (Z-A)</option>
                                <option value="DateNew">
                                    Date (Newest to Oldest)
                                </option>
                                <option value="DateOld">
                                    Date (Oldest to Newest)
                                </option>
                            </select>
                            <SearchForm
                                name="Businesses-Search"
                                value={this.state.posts_search}
                                onChange={this.filterPosts.bind(this)}
                                classType="search_form2"
                            ></SearchForm>
                            {this.state.posts.map((post) => {
                                if (
                                    post.name
                                        .toLocaleLowerCase()
                                        .includes(
                                            this.state.posts_search.toLowerCase()
                                        )
                                ) {
                                    return (
                                        <Post
                                            name={post.name}
                                            message={post.content}
                                            removePost={() =>
                                                removePost(this, post)
                                            }
                                            date={post.date}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanel;
