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
            resturantNames: ["John's", "Daniel's", "Jack's", "Lee's"],
            search: ''
        };
    }

    filterEvents(event) {
        this.setState({search: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <div id='nav'>
                    <h3>UofT locals</h3>
                    <ul>Login / SignUp</ul>
                    <ul style={{fontWeight: 'bold'}}>Browse</ul>
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
                    <select name="catagories" class='catagories'>
                        <option value="Resturant/bars">Resturant/Bars</option>
                        <option value="Grocery Stores">Grocery Stores</option>
                        <option value="Activities">Activities</option>
                    </select>
                    <input placeholder='Search Names' class='catagories' onChange={this.filterEvents.bind(this)}></input>
                    </div>
                    {this.state.resturantNames.map((names, id)=>{
                        if (names.toLocaleLowerCase().includes(this.state.search.toLowerCase())) {
                            return <ResturantCover key={id} img={sampleStoreImg} name={names} desc='some description'/>
                        }
                    })}
                </div> 
            </div>
        )
  }
}

export default LandingPage;
