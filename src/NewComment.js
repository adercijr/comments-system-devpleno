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
            <div className="p-1">
            <form>
                <div>                    
                    <div className="row">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" cols="100"
                            placeholder="Digite uma mensagem"
                            value={this.state.newComment} onChange={this.handleChange}>
                        </textarea>                    
                    </div>
                </div>
            </form>
            <div className="d-flex">
                        <div className="flex-grow-1 d-flex flex-column justify-content-end">
                            { this.state.error && <p className="text-danger">Write a valid message!</p> }
                            { this.state.success && <p className="text-success">
                            Message sent successfully!</p> }
                        </div>
                        <button className="btn btn-dark mt-3 float-right" onClick={this.sendComment}>Submit</button> 
            </div>
            </div>
            
        )
    }
}