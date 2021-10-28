import LandingPage from './views/LandingPage.js';
import BusinessProfilePage from './views/BusinessProfilePage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/profile-example">
                    <BusinessProfilePage />
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
