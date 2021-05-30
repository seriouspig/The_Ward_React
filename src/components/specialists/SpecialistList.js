import React from 'react';
import Specialist from './Specialist.js';


const SpecialistList = (props) => {

	if (props.specialists.length === 0){
	  return (<p>Loading...</p>)
	}

	const specialists = props.specialists.map((specialist, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Specialist specialist={specialist} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {specialists}
	  </ul>
	)
}
 export default SpecialistList;
