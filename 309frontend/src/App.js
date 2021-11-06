import LandingPage from './views/LandingPage.js';
import BusinessProfilePage from './views/BusinessProfilePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage.js';
import SignupPage from './views/SignupPage.js';
import StudentProfile from './views/StudentProfilePage.js';
import AdminPanel from './views/AdminPanelPage.js';

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
                    <SignupPage></SignupPage>
                </Route>
                <Route path="/student-profile">
                    <StudentProfile></StudentProfile>
                </Route>
                <Route path="/admin-panel">
                    <AdminPanel></AdminPanel>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
