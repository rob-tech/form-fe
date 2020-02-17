import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import ExperienceForm from "../components/Form";
import Login from "../components/Login";
import Register from "../components/Register";
import Experience from "../components/Experience";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getUser: (user, token) =>
    dispatch({
      type: "USER",
      payload: {
        user: user,
        token: token
      }
    })
});

class Main extends Component {
  state = {};

  render() {
    return (
          <Router>
            <Route path="/form" exact component={ExperienceForm} />
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} /> 
            <Route path="/experiences" exact component={Experience} /> 
          </Router>
    );
  }

  componentDidMount = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const res = await fetch("http://localhost:3000/user/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (res.ok) {
        var tokenJson = await res.json();
        localStorage.setItem("accessToken", tokenJson.token);
        this.props.getUser(tokenJson.user, tokenJson.token);
      } else {
        localStorage.removeItem("accessToken");
      }
    }

    //if (there is a token)
    // refresh token
    //if refresh token is successfull
    //save the user info and the token (using redux)
    //else
    // remove from local storage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
