import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PatientList from '../components/patients/PatientList';
import Request from '../helpers/request';

class PatientContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patients: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/patients')
    .then((data) => {
      this.setState({patients: data})
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
        return <PatientList patients={this.state.patients}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default PatientContainer;