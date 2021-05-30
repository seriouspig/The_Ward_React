import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../NavBar.js';
import IllnessContainer from './IllnessContainer';

const MainContainer = () => {

    return (
        <Router>
            <>
                <NavBar/>
                <Switch>
                    <Route path="/illnesses" component={IllnessContainer}/>
                    <h3> I am the main container </h3>
                </Switch>
            </>
        </Router>
    )
}
export default MainContainer;