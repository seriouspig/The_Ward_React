import React from 'react'

const NavBar = (props) => {
    return (
        <header>
            <ul>
                <li className="navLink">
                    <a href="/illnesses"> Illnesses </a>
                </li>
                <li className="navLink">
                    <a href="/patients"> Patients </a>
                </li>
                <li className="navLink">
                    <a href="/specialists"> Specialists </a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar
