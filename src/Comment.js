import React from 'react'

const Comment = ({c}) => {    
        return (            
                <div>                    
                 <strong>{c.name}: </strong>{c.comment}
                </div>           
        )    
}

export default Comment