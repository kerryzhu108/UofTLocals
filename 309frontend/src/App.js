import LandingPage from './views/LandingPage.js';
import BusinessProfilePage from './views/BusinessProfilePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage.js';
import SignupPage from './views/SignupPage.js';
import StudentProfile from './views/StudentProfilePage.js';
import AdminPanel from './views/AdminPanelPage.js';
import BusinessSignupPage from "./views/BusinessSignupPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/profile-example">
                    <BusinessProfilePage name="Caffeine Corner" />
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/signup">
                    <SignupPage/>
                </Route>
                <Route path="/businessSignup">
                    <BusinessSignupPage/>
                </Route>
                <Route path="/student-profile">
                    <StudentProfile/>
                </Route>
                <Route path="/admin-panel">
                    <AdminPanel></AdminPanel>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
