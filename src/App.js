import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import HomePage from './components/pages/HomePage';
import Logout from './components/pages/Logout';
import Survey from './components/pages/SurveyForm';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {logoutUser} from './userApi';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/login' component={LoginPage}/>
                  <Route exact path='/register' component={SignUpPage}/>
                  <Route exact path='/survey' component={Survey}/>
                  <Route exact path='/logout' render={() => (
                    <Logout
                      logoutUser={logoutUser}
                    />
                  )}/>
                </Switch>
                <NavBar />
                <Footer />
            </div>
        );
    }
}
export default App;
