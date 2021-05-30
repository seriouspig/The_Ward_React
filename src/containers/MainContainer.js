import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import IllnessContainer from './IllnessContainer';
import PatientContainer from './PatientContainer';
import SpecialistContainer from './SpecialistContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/illnesses" component={IllnessContainer}/>
        <Route path="/patients" component={PatientContainer}/>
        <Route path="/specialists" component={SpecialistContainer}/>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
