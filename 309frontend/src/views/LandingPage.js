import React from 'react';
import '../css/LandingPage.css';
import bannerImg from '../images/banner.jpeg'
import filter from '../images/filter.png'
import ResturantCover from '../components/ResturantCover';
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
                {name: "John's", type:"Resturant/Bar", desc: 'Some desc1'},
                {name: "Dan's", type:"Grocery", desc: 'Some desc2'},
                {name: "Lee's", type:"Activity", desc: 'Some desc3'},
                {name: "Jack's", type:"Resturant/Bar", desc: 'Some desc4'},
            ]
        })
    }

    filterEvents(event) {
        this.setState({search: event.target.value});
    }

    filterType(event) {
        this.setState({type: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <div id='nav'>
                    <h3>UofT locals</h3>
                    <div style={{"text-align": "right"}}>
                        <a href="/login">Login </a> 
                        <a href="/signup">SignUp</a>
                        <a href="/" id="browse">Browse</a>
                    </div>
                </div>
                <div id='bannerWrapper'>
                    <img id='banner' src={bannerImg} alt="resturant"/>
                    <div id='bannerDesc'>
                        <h3> UOFT <br/> LOCALS</h3>
                        <p>Discover local businesses in the <br/> Toronto area.</p>
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
                    {this.state.resturants.map((resturant, id)=>{
                        const searchFilterCheck = resturant['name'].toLowerCase().includes(this.state.search.toLowerCase());
                        const typeFilterCheck = resturant['type'].toLowerCase().includes(this.state.type.toLocaleLowerCase());
                        if (searchFilterCheck && typeFilterCheck) {
                            return <ResturantCover key={id} img={sampleStoreImg} name={resturant['name']} businessType={resturant['type']} desc={resturant['desc']}/>
                        }
                        return null
                    })}
                </div> 
            </div>
        )
  }
}

export default LandingPage;
