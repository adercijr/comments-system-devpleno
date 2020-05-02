import React, {Component} from 'react'

export default class NewComment extends Component {

    state = {
        newComment: '',
        error: false,
        success: false
    }

    handleChange = event => {
        this.setState({
          newComment: event.target.value,
          error: false,
          success: false                 
        })
      }

      sendComment = () => {
          if(this.state.newComment){
              this.props.sendComment(this.state.newComment, this.state.name)
              this.setState({
                  newComment: '',
                  success: true,
                  error: false         
              })             
          } else {
              this.setState({                 
                error: true
              })              
          }
      }

    render() {
        return (
            <div className="pr-3 pl-3 align-items-center">
                <form>                       
                        <div className="form-row justify-content-between align-items-end">
                            <div className="col-9 col-sm-10 col-lg-11">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"
                                    placeholder="Write a message"
                                    value={this.state.newComment} onChange={this.handleChange}>
                                </textarea>                  
                            </div>
                            <div className="col-1">                              
                                <button className="btn btn-dark mt-3 float-right" onClick={this.sendComment}>Submit</button> 
                            </div>
                        </div>
                   
                </form>                                 
            </div>            
        )
    }
}