import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: '',
        passwd: ' ',
        haveCount: false
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    userRegister = () => {
        this.props.userRegister(this.state.email, this.state.passwd)
    }

    haveCount = () => {
        this.setState({
            haveCount: !this.state.haveCount
        })
    }

    render(){

    const errorMsgEmail= {        
        'auth/invalid-email' : 'Invalid Email',
        'auth/user-not-found' : 'User not found',
        'auth/email-already-in-use' : 'Email alredy in use'
        
    }
    const errorMsgPasswd = {
        'auth/wrong-password' : 'Invalid Password',
        'auth/weak-password' :  'Weak Password'
    }

    return (
        <div>            
            <p>
                <button className="btn btn-success btn-sm m-1 " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Sign in / Register
                </button>
            </p>

            <div className="collapse row" id="collapseExample">

            {
                !this.state.haveCount && 
                <div className="col-sm-12 col-lg-8">                    
                        <div className="card card-body">
                        <h2>Join us</h2>
                            <form>
                                <div className="form-group mt-2">
                                    <label htmlFor="emailField">Email address</label>
                                    <input type="email" className="form-control" id="emailField"
                                        onChange={this.handleChange('email')} ></input>
                                    {
                                        this.props.isAuthError && <p className="text-danger">
                                            {errorMsgEmail[this.props.authError]}</p>
                                    } 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwdlField">Password</label>
                                    <input type="password" className="form-control" id="passwdlField"
                                        onChange={this.handleChange('passwd')} ></input>
                                    {
                                        this.props.isAuthError && <p className="text-danger">
                                             {errorMsgPasswd[this.props.authError]}</p>
                                    } 
                                </div>

                                <button type="button" onClick={this.userRegister} className="btn btn-danger">Register</button>
                                <button type="button" onClick={this.haveCount} className="btn btn-link">Already have an account? Sign in</button>
                            </form>
                        </div>                    
                </div> 
            }

            {
                this.state.haveCount && 
                <div className="col-sm-12 col-lg-8">
                        <div className="card card-body">
                        <h2>Sign in</h2>
                            <form>
                                <div className="form-group mt-2">
                                    <label >Email address</label>
                                    <input type="email" className="form-control" 
                                        onChange={this.handleChange('email')} ></input>

                                        {
                                            this.props.isAuthError && <p className="text-danger">
                                                {errorMsgEmail[this.props.authError]}</p>
                                        } 
                                </div>
                            
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" 
                                        onChange={this.handleChange('passwd')} ></input>

                                        {
                                            this.props.isAuthError && <p className="text-danger">
                                                {errorMsgPasswd[this.props.authError]}</p>
                                        } 
                                </div>

                                <button type="button" onClick={this.login} className="btn btn-primary">Sign in</button>
                                <button type="button" onClick={this.haveCount} className="btn btn-link">
                                    Don't have an account? Join us</button>
                                

                            </form>
                        </div>
                </div>           
                }

            </div> 

        </div>
    )
    }
}

export default Login