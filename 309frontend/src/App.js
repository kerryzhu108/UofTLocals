import './App.css';
import bannerImg from './images/banner.jpeg'

function App() {
  return (
    <div className="App">
          <div id='nav'>
            <h3>UofT locals</h3>
            <ul>Login / SignUp</ul>
            <ul style={{fontWeight: 'bold'}}>Browse</ul>
          </div>
          <div style={{position: "relative"}}>
            <img id='banner' src={bannerImg} alt="resturant"/>
            <div id='bannerDesc'>
              <h3>UofT Locals</h3>
              <p>Discover local businesses in the Toronto area.</p>
            </div>
          </div>
    </div>
  );
}

export default App;
