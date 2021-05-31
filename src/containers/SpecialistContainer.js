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
      this.setState({specialists: data})
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
        return <SpecialistList specialists={this.state.specialists}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default SpecialistContainer;
