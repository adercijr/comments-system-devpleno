import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import './App.css'
import Login from './Login'
import User from './User'

class App extends Component {
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    user: {}
  }

  sendComment = (comment, email) => {  
      const id = this.props.database.ref().child('comments').push().key
      const comments = {}
      comments['comments/'+id] = {
        comment, 
        email: this.state.user.email,     
        userId: this.state.user.uid
      }
      this.props.database.ref().update(comments)    
  }  

  login = async (email, passwd) => {
    const { auth } = this.props
    this.setState({
      isAuthError: false,
      authError: ''
    })
    try {
      await auth.signInWithEmailAndPassword(email, passwd)
    }catch(err){
      this.setState({
        isAuthError: true,
        authError: err.code
      })
    }
  }

  userRegister = async (email, passwd) => {
    const { auth } = this.props
    this.setState({
      isAuthError: false,
      authError: ''
    })
    try {
      await auth.createUserWithEmailAndPassword(email, passwd)
    }catch(err){
      this.setState({
        isAuthError: true,
        authError: err.code
      })
    }
  }
  
  logout = () => {
    const { auth } = this.props
    auth.signOut()
  }

  componentDidMount() {
    const { database, auth } = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({
          isAuth: true,
          user
        })
      } else {
        this.setState({
          isAuth: false,
          user: {}
        })
      }
    })
  }
 
  render() {
    return (           
      <div className="bg-info">
      
          <div className="container App rounded">

                <h1>Comments System</h1>

                  <div className="row bg-light justify-content-center">
                      <div className="col-md-10 col-sm-12 mb-3">
                        
                        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout}/>}
                        {!this.state.isAuth && <Login login={this.login} isAuthError={this.state.isAuthError}
                          authError={this.state.authError} userRegister={this.userRegister}/>}
                        {this.state.isAuth && <NewComment sendComment={this.sendComment} />}                       

                      </div>
                  </div>

                  <div className="row bg-white justify-content-center p-3">
                      
                        <Comments comments={this.state.comments}/>

                        { 
                          this.state.isLoading && <p>Carregando...</p> 
                        }        
                      
                  </div>  

          </div>
          </div>
      
    )
  }
}

export default App;
