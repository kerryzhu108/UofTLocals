import React from "react";
import "../css/LandingPage.css";
import bannerImg from "../images/banner.jpeg";
import filter from "../images/filter.png";
import ResturantCover from "../components/ResturantCover.js";
import Header from "../components/Header.js";
import defaultBusinessImg from "../images/defaultBusinessImage.png";
import { getBusinesses } from "../apis/business.js";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            search: "",
            type: "Any",
            username: "Login",
        };
    }

    async componentDidMount() {
        window.addEventListener("load", this.fetchResturants.bind(this));
    }

    async fetchResturants() {
        // fetch all active resturants and their descriptions from server
        let activeBusinesses = [];
        const businesses = await getBusinesses();
        if (!businesses) { return }
        businesses.forEach((business) => {
            activeBusinesses.push({
                name: business["name"],
                type: business["type"],
                desc: business["description"],
                id: business["_id"],
                publicImageURL: business["publicImageURL"]
            });
        });
        this.setState({
            businesses: activeBusinesses,
        });
    }

    filterEvents(event) {
        this.setState({ search: event.target.value });
    }

    filterType(event) {
        this.setState({ type: event.target.value });
    }

    render() {
        return (
            <div>
                <div id="nav">
                    <Header />
                </div>
                <div className='center'>

                    <div id="bannerWrapper">
                        <img id="banner" src={bannerImg} alt="resturant" />
                        <div id="bannerDesc">
                            <h3>
                                {" "}
                                UOFT <br /> LOCALS
                            </h3>
                            <p>
                                Discover local businesses in the <br /> Toronto
                                area.
                            </p>
                        </div>
                    </div>
                    <p id="browseLabel">BROWSE LOCAL BUSINESSES</p>
                    <div id="browseContainer">
                        <div id="filterBar">
                            <img id="filter" src={filter} alt=""></img>
                            <select
                                name="catagories"
                                className="catagories"
                                onChange={this.filterType.bind(this)}
                            >
                                <option value="Any">Any</option>
                                <option value="Resturant/bar">
                                    Resturant/Bars
                                </option>
                                <option value="Grocery">Grocery Stores</option>
                                <option value="Activity">Activities</option>
                            </select>
                            <input
                                placeholder="Search Names"
                                id="filterSearch"
                                onChange={this.filterEvents.bind(this)}
                            ></input>
                        </div>
                        {this.state.businesses.map((business, id) => {
                            const searchFilterCheck = business["name"].toLowerCase().includes(this.state.search.toLowerCase());
                            const typeFilterCheck = this.state.type.toLowerCase().includes(business["type"].toLowerCase()) || this.state.type === "Any";
                            if (searchFilterCheck && typeFilterCheck) {
                                return (
                                    <ResturantCover
                                        key={id}
                                        img={ business.publicImageURL || defaultBusinessImg}
                                        name={business["name"]}
                                        businessType={business["type"]}
                                        desc={business["desc"]}
                                        dbId={business["id"]}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>    
            </div>
        );
    }
}

export default LandingPage;
