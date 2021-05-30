import React from 'react'

const Illness = ({illness}) => {

    if(!illness) {
        return "Loading..."
    }

    return (
        <>
            <p>
                Illness: {illness.name}
            </p>
        </>
    )
}

export default Illness
