import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import { connect } from "react-redux";
import NavBar from "./Navbar"

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getExperiences: (allExperiences) =>
    dispatch({
      type: "EXPERIENCES",
      payload: allExperiences
    
    }),
    // errMess: (allExperiences) =>
    // dispatch({
    //   type: "ERR_MSG",
    //   payload: {
    //     message: "add first exp",
    //   }
    // })
});

class Experience extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <NavBar/>
           <Container id="contDisplayExp">
            <ListGroup>
            {this.props.experiences.allExperiences && this.props.experiences.allExperiences.map(exp => (
            <ListGroupItem>Company: {exp.company} / Role: {exp.role} / Description: {exp.description} / Start: {exp.startDate? exp.startDate.split('T')[0] : "00-00-00" } / End: {exp.endDate ? exp.endDate.split('T')[0] : "00-00-00"}</ListGroupItem>
        ))}
          </ListGroup>
          </Container>
          </>
            );
    }

    componentDidMount = async () => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const res = await fetch("http://localhost:3000/form", {
            method: "GET",
            headers: {       
                    "Authorization": 'Bearer ' + token,                  
            }
          });
    
            let experiences = await res.json()
            experiences = experiences.experiences
            this.props.getExperiences(experiences);
          console.log(experiences)
        }
      };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Experience);



