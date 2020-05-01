import React from 'react'

const User = props => {
    return(
        <div className="mt-1">
            Logado como: {props.email}
            <button type="button" className="btn btn-link" onClick={props.logout}>Logout</button>
        </div>
        
    )
}

export default User