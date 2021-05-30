import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SpecialistList from '../components/specialists/SpecialistList';
import Request from '../helpers/request';

class SpecialistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      specialists: []
    }
  }

  componentDidMount(){
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
