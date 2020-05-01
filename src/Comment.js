import React from 'react'

const Comment = ({c}) => {    
        return (            
                <div>                    
                 <strong>{c.email}:
                 <br></br>
                </strong>{c.comment}
                <hr></hr>
                </div>           
        )    
}

export default Comment