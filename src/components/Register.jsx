import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Container } from "reactstrap";
import { submitRegister, submitLogin } from "../actions/index";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  submitRegisterThunk: user => dispatch(submitRegister(user)),
  submitLoginThunk: user => dispatch(submitLogin(user)),
  setErrMess: (errMess, succMess) =>
  dispatch({
       type: "ERR_MSG",
       payload: {succMessage: succMess, errMessage: errMess}
     }),
});

class Register extends Component {
  constructor(params) {
    super(params);

    this.state = {
      user: {
        email: "",
        password: "",
        name: "",
        surname: ""
      },
    };
  }

  register = async () => {
    let res = await this.props.submitRegisterThunk(this.state.user);

    if (res === true){
      let succMess = "You have been registered. Last step is to login"
      this.props.setErrMess(null, succMess)
    } else {
      let errMess = "You already have an account. Please log in."
      this.props.setErrMess(errMess, null)
    }
 
  this.setState({ user: {
    email: "",
    password: "",
    name: "",
    surname: ""
  }})
    
  };

  

    
  render() {
    console.log(this.props.errMess)
    return (
      <>
      <Container>
        <div className="row mt-5 text-align-center">
          <div className="col-md-6 m-auto">
            <div className="card card-body registerCard">
              <h1 className="text-center mb-3">
                <i className="fa fa-user-plus fa-1x" aria-hidden="true"></i>{" "}
                Register
              </h1>
              <div className="form-group">
                <label id="registerLabel" for="name">
                  Name
                </label>
                <input
                  id="registerInput"
                  type="text"
                  value={this.state.user.name}
                  onChange={val =>
                    this.setState({
                      user: {
                        ...this.state.user,
                        name: val.currentTarget.value
                      }
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label id="registerLabel" for="surname">
                  Surname
                </label>
                <input
                  id="registerInput"
                  type="text"
                  value={this.state.user.surname}
                  onChange={val =>
                    this.setState({
                      user: {
                        ...this.state.user,
                        surname: val.currentTarget.value
                      }
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label id="registerLabel" for="email">
                  Email
                </label>
                <input
                  id="registerInput"
                  type="email"
                  value={this.state.user.email}
                  onChange={val =>
                    this.setState({
                      user: {
                        ...this.state.user,
                        email: val.currentTarget.value
                      }
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label id="registerLabel" for="password">
                  Password
                </label>
                <input
                  id="registerInput"
                  type="password"
                  value={this.state.user.password}
                  onChange={val =>
                    this.setState({
                      user: {
                        ...this.state.user,
                        password: val.currentTarget.value
                      }
                    })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={this.register}
              >
                Register
              </button>
              {this.props.errMess.errMessage &&(
                <Alert className="loginAlert" color="warning">
                  {this.props.errMess.errMessage}
                </Alert>
              )}
              {this.props.errMess.succMessage && (
                <Alert className="loginAlert" color="primary">
                {this.props.errMess.succMessage}
              </Alert>
              )}
              <p className="lead mt-4">
                Have An Account? <a href="/">Login</a>
              </p>
            </div>
          </div>
        </div>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
