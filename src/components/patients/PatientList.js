import React from 'react';
import Patient from './Patient.js';


const PatientList = (props) => {

	if (props.patients.length === 0){
	  return (<p>Loading...</p>)
	}

	const patients = props.patients.map((patient, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Patient patient={patient} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {patients}
	  </ul>
	)
}
 export default PatientList;
