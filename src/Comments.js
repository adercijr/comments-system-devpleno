import React from 'react'
import Comment from './Comment'
import './Comments.css'

const Comments = ({comments}) => {
    
        // comments vem como objeto não como array, portanto tiramos as chaves
        const keys = Object.keys(comments)

        return (
            
                <div className="Comments col overflow-auto ">
                    { keys.map(key => <Comment key={key} c={comments[key]}/> )}
                </div>
           
        )     
}

export default Comments