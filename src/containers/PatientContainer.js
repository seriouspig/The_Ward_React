import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PatientList from '../components/patients/PatientList';
import Request from '../helpers/request';


const PatientContainer = () => {
    const [patients, setPatients] = useState([])
  

  useEffect(() => {
    const request = new Request();

    request.get('/api/patients')
    .then((data) => {
      setPatients(data)
    })
  }, [])

  return(
      <Router>
      <Fragment>
      <Switch>
      <Route>
        <PatientList patients={patients}/>
      </Route>
      </Switch>
      </Fragment>
      </Router>
    )
  

}

export default PatientContainer;