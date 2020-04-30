import React, {Component} from 'react'

export default class NewComment extends Component {

    state = {
        newComment: '',
        error: false,
        success: false,
        name: ''
    }

    handleChange = event => {
        this.setState({
          newComment: event.target.value,
          error: false,
          success: false                 
        })
      }
    handleChangeName = event => {
        this.setState({
          name: event.target.value,
          error: false,
          success: false                    
        })
      }

      sendComment = () => {
          if(this.state.newComment && this.state.name){
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
            <div className="p-3">
            <form>
                <div>
                    <div className="row">
                        <div className="input-group mb-3 mt-3" value={this.state.name} onChange={this.handleChangeName}> 
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Username</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Digite seu nome" aria-label="Username" aria-describedby="basic-addon1"/>               
                        </div>
                    </div>
                    <div className="row">
                        <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="5" cols="100"
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