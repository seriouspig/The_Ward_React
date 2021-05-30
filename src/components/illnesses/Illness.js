import React, {Fragment} from 'react';

const Illness = ({illness}) => {

    if (!illness){
      return "Loading..."
    }
    return (
      <Fragment>
      <p>
      {illness.name}
      <br></br>
      {illness.specialist.speciality}
      </p>
      </Fragment>
    )
  }
  
  export default Illness;
  
