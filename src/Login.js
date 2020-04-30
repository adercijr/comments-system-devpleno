import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: '',
        passwd: ' '
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render(){
    return (
        <div>
            
            <p className="mt-2">
                <button className="btn btn-success btn-sm mt-4 " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Login / Sign in
                </button>
            </p>

            <div className="row">
            <div className="col-sm-12 col-lg-6">
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <h2>join us</h2>
                        <form>
                            <div className="form-group mt-2">
                                <label >Email address</label>
                                <input type="email" className="form-control" 
                                    onChange={this.handleChange('email')} ></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" 
                                    onChange={this.handleChange('passwd')} ></input>
                            </div>
                            <button type="button" onClick={this.login} className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div> 
            
            <div className="col-sm-12 col-lg-6">
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <h2>Register</h2>
                        <form>
                            <div className="form-group mt-2">
                                <label htmlFor="emailField">Email address</label>
                                <input type="email" className="form-control" id="emailField"
                                    onChange={this.handleChange('email')} ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwdlField">Password</label>
                                <input type="password" className="form-control" id="passwdlField"
                                    onChange={this.handleChange('passwd')} ></input>
                            </div>
                            <button type="button" onClick={this.login} className="btn btn-danger">Sign in</button>
                        </form>
                    </div>
                </div>
            </div> 
            </div> 

        </div>
    )
    }
}

export default Login