import React, {Component} from 'react'
import Comment from './Comment'
import './Comments.css'

class Comments extends Component {

            
        // comments vem como objeto não como array, portanto tiramos as chaves
        render(){
                const keys = Object.keys(this.props.comments)
        return (
            
                <div>
                    { keys.map(key => <Comment key={key} c={this.props.comments[key]}/> )}
                </div>
           
        )}    
}

export default Comments