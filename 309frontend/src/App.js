import LandingPage from './views/LandingPage.js';
import BusinessProfilePage from './views/BusinessProfilePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage.js';
import SignupStudent from './views/SignupStudent.js';
import SignupBusiness from "./views/SignupBusiness";
import StudentProfile from './views/StudentProfilePage.js';
import AdminPanel from './views/AdminPanelPage.js';
import BusinessProfileUserDummy from './views/BusinessProfileUserDummy.js';
import BusinessProfileBusinessDummy from './views/BusinessProfileBusinessDummy.js';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/business-profile">
                    <BusinessProfilePage name="Caffeine Corner" />
                </Route>
                <Route path="/business-profile-user">
                    <BusinessProfileUserDummy name="Caffeine Corner" />
                </Route>
                <Route path="/business-profile-user2">
                    <BusinessProfileBusinessDummy name="Caffeine Corner" />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupStudent />
                </Route>
                <Route path="/business-signup">
                    <SignupBusiness />
                </Route>
                <Route path="/student-profile">
                    <StudentProfile />
                </Route>
                <Route path="/admin-panel">
                    <AdminPanel></AdminPanel>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
