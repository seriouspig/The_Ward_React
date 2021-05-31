import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SpecialistList from '../components/specialists/SpecialistList';
import Request from '../helpers/request';

const SpecialistContainer = () => {
  const[specialists, setSpecialists] = useState([])

  useEffect(() => {
    const request = new Request();

    request.get('/api/specialists')
    .then((data) => {
      setSpecialists(data)
    })
  },[])

  
    return(
      <Router>
        <Fragment>
          <Switch>
            <Route>
                <SpecialistList specialists={specialists}/>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  

}

export default SpecialistContainer;
