import React from 'react'
import Illness from './Illness'

const IllnessList = (props) => {

    if (props.illnesses.length === 0) {
        return (<p>Loading...</p>)
    }

    const illnesses = props.illnesses.map((illness, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Illness illness={illness} />
                </div>
            </li>
        )
    })

    return (
        <div>
            <ul className="component-list">
                {illnesses}
            </ul>
        </div>
    )
}

export default IllnessList


