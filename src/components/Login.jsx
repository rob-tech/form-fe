import React, { Component } from 'react';
import { Alert, Container } from "reactstrap";
import { connect } from "react-redux";
import { submitLogin } from "../actions/index";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    submitLoginThunk: user => dispatch(submitLogin(user)),
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            username: "", 
            password: "",
           },                
        }
    }

    login = async () => {
        await this.props.submitLoginThunk(this.state.user)
        if(this.props.user.token){
      
            this.props.history.push("/form")
        }
        else{
            this.props.history.push("/register")
        }
    }

    render() {
        return (
            <>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body loginCard">
                            <h1 className="text-center mb-3"> Login</h1>
                            <div className="form-group" >
                                <input id="loginInput" type="text" value={this.state.user.username} placeholder= "username (email)" onChange={(val) => this.setState({ user:{...this.state.user, username: val.currentTarget.value} })} />
                                <div className="invalid-feedback">Username is required</div>
                            </div>
                            <div className="form-group">
                                <input id="loginInput" type="password" value={this.state.user.password} placeholder=" password" onChange={(val) => this.setState({ user:{...this.state.user, password: val.currentTarget.value} })} />
                                <div className="invalid-feedback">Password is required!</div>
                            </div>
                            <button id="loginButton" className="btn btn-primary btn-block" onClick={this.login} value="login">Login</button>
                      
                            {this.props.errMess.message && (
                                <Alert className="loginAlert" color="warning">{this.props.errMess.message}</Alert>
                            )}
                            <p className="lead mt-4">
                                No Account? <a href="/register">Register</a>
                            </p>
                     
                        </div>
                    </div>
                </div>
                </Container>
            </>
        )
    }


}


export default connect(mapStateToProps, mapDispatchToProps)(Login);