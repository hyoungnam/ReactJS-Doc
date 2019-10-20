
import React from 'react'

const introducing = () => {

    function formatName(user) {
        return `${user.firstName} ${user.secondName}`
    }
    function getGreeting(user) {
        if(user) {
            return <h3>Hello, {formatName(user)}!</h3>
        }
        return <h3>Hello, Stranger</h3>
    }
    const user = {
        firstName : 'Harper',
        secondName : 'Perez',
    }

    return(
        <>
            <h3>Introducing JSX</h3>
            <h3>Hello, {formatName(user)}</h3>
            {getGreeting(user)}
        </>
    )
}

export default introducing