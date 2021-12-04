import React from 'react';
import '../css/LandingPage.css';
import bannerImg from '../images/banner.jpeg'
import filter from '../images/filter.png'
import ResturantCover from '../components/ResturantCover.js';
import Link from '../components/Link.js';
import sampleStoreImg from '../images/sampleStoreImg.jpeg';
import { getBusinesses } from '../apis/business.js'
import {getProfile} from "../apis/profile";
import Cookies from 'universal-cookie';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            search: '',
            type: '',
            username: 'Login'
        };
    }

    async componentDidMount() {
        // Determine if the user is signed in or not
        const cookies = new Cookies();
        const access = cookies.get("access_token");
        if (access) {
            // This user is logged in, get the appropriate information
            const profile = await getProfile();
        }

        window.addEventListener('load', this.fetchResturants.bind(this))
    }

    async fetchResturants() {
        // fetch all active resturants and their descriptions from server
        let activeBusinesses = []
        const businesses = await getBusinesses()
        console.log(businesses)
        businesses.forEach((business)=>{
            activeBusinesses.push({name: business['name'], type: business['type'], desc: business['description'], id: business['_id']})
        })
        this.setState({
            businesses: activeBusinesses
        })
    }

    filterEvents(event) {
        this.setState({ search: event.target.value });
    }

    filterType(event) {
        this.setState({ type: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <div id='nav'>
                    <h3>UofT locals</h3>
                    <div className='textRight'>
                        <Link href="/login" name={this.state.username} />
                        <Link href="/signup" name='SignUp' />
                        <Link href="/" name='Browse' />
                    </div>
                </div>
                <div id='bannerWrapper'>
                    <img id='banner' src={bannerImg} alt="resturant" />
                    <div id='bannerDesc'>
                        <h3> UOFT <br /> LOCALS</h3>
                        <p>Discover local businesses in the <br /> Toronto area.</p>
                    </div>
                </div>
                <p id='browseLabel'>BROWSE LOCAL BUSINESSES</p>
                <div id='browseContainer'>
                    <div id='filterBar'>
                        <img id='filter' src={filter} alt=''></img>
                        <select name="catagories" className='catagories' onChange={this.filterType.bind(this)}>
                            <option value="Any">Any</option>
                            <option value="Resturant/bar">Resturant/Bars</option>
                            <option value="Grocery">Grocery Stores</option>
                            <option value="Activity">Activities</option>
                        </select>
                        <input placeholder='Search Names' id='filterSearch' onChange={this.filterEvents.bind(this)}></input>
                    </div>
                    {this.state.businesses.map((business, id) => {
                        const searchFilterCheck = business['name'].toLowerCase().includes(this.state.search.toLowerCase());
                        const typeFilterCheck = business['type'].toLowerCase().includes(this.state.type.toLowerCase()) || this.state.type === 'Any';
                        if (searchFilterCheck && typeFilterCheck) {
                            return <ResturantCover key={id}
                                img={sampleStoreImg}
                                name={business['name']}
                                businessType={business['type']}
                                desc={business['desc']}
                                dbId={business['id']}
                            />
                        }
                        return null
                    })}
                </div>
            </div>
        )
    }
}

export default LandingPage;
