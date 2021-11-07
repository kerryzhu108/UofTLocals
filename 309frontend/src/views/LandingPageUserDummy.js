import React from 'react';
import '../css/LandingPage.css';
import bannerImg from '../images/banner.jpeg'
import filter from '../images/filter.png'
import ResturantCover from '../components/ResturantCover';
import Link from '../components/Link.js';
import sampleStoreImg from '../images/sampleStoreImg.jpeg';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resturants: [],
            search: '',
            type: '',
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.fetchResturants.bind(this));
    }

    fetchResturants() {
        // fetch all active resturants and their descriptions from server
        this.setState({
            resturants: [
                { name: "John's", type: "Resturant/Bar", desc: 'Some desc1', route: '/business-profile-user' },
                { name: "Dan's", type: "Grocery", desc: 'Some desc2', route: '/business-profile-user' },
                { name: "Lee's", type: "Activity", desc: 'Some desc3', route: '/business-profile-user' },
                { name: "Jack's", type: "Resturant/Bar", desc: 'Some desc4', route: '/business-profile-user' },
            ]
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
                    <div class='textRight'>
                        <Link href="/student-profile" name='Edit Student Profile' />
                        <Link href="/" name='Logout' />
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
                        <select name="catagories" class='catagories' onChange={this.filterType.bind(this)}>
                            <option value="Any">Any</option>
                            <option value="Resturant/bar">Resturant/Bars</option>
                            <option value="Grocery">Grocery Stores</option>
                            <option value="Activity">Activities</option>
                        </select>
                        <input placeholder='Search Names' id='filterSearch' onChange={this.filterEvents.bind(this)}></input>
                    </div>
                    {this.state.resturants.map((resturant, id) => {
                        const searchFilterCheck = resturant['name'].toLowerCase().includes(this.state.search.toLowerCase());
                        const typeFilterCheck = resturant['type'].toLowerCase().includes(this.state.type.toLowerCase()) || this.state.type === 'Any';
                        if (searchFilterCheck && typeFilterCheck) {
                            return <ResturantCover key={id}
                                img={sampleStoreImg}
                                name={resturant['name']}
                                businessType={resturant['type']}
                                desc={resturant['desc']}
                                route={resturant['route']}
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
