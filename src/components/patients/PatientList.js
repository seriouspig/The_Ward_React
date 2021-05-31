import React from 'react';
import Patient from './Patient.js';


const PatientList = ({patients}) => {

	if (patients.length === 0){
	  return (<p>Loading...</p>)
	}

	const renderPatients = patients.map((patient, index) => {
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
	    {renderPatients}
	  </ul>
	)
}
 export default PatientList;
