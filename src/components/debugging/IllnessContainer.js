import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IllnessList from '../components/illnesses/IllnessList';
import Request from '../helpers/request';

class IllnessContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      illnesses: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/illnesses')
    .then((data) => {
      this.setState({illnesses: data})
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
        return <IllnessList illnesses={this.state.illnesses}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default IllnessContainer;
