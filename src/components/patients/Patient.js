import React, {Fragment} from 'react'

const Patient = ({patient}) => {

    if (!patient){
        return "Loading..."
    }

    return (
    <Fragment>
    <p>
    {patient.name}
    <br></br>
    {patient.age}
    </p>
    </Fragment>
  )

    
}

export default Patient
