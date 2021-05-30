import React, {Fragment} from 'react';

const Specialist = ({specialist}) => {

  if (!specialist){
    return "Loading..."
  }
  return (
    <Fragment>
        <div className="flex-container">
            <img src={`/images/doctors/${specialist.photo}`} className="photo"/>
            <div>
            <h4> Name: {specialist.name} </h4>
            <p> Age: {specialist.age}</p>
            <p>{specialist.speciality} </p>
            </div>
        </div>
    </Fragment>
  )
}

export default Specialist;
