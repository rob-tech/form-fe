import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import { addExperience } from "../actions/index";
import NavBar from "./Navbar"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setLoading: () =>
  dispatch({
    type: "LOADING"
  }),
  addExperienceThunk: experience => dispatch(addExperience(experience))
});

class ExperienceForm extends Component {
  constructor(params) {
    super(params);

    this.state = {
      experience: {}
      }
    };


  onChange = async e => {
    const experience = this.state.experience;
    experience[e.currentTarget.id] = e.currentTarget.value;
    console.log(experience[e.currentTarget.id]);
    this.props.setLoading();
    this.setState({ experience: experience });
  };

  onSubmit = async e => {
    e.preventDefault();
    await this.props.addExperienceThunk(this.state.experience);
    this.setState({ experience: { role: "", company: ""}})
  };

  render() {
    return (
      <>
       <NavBar/>
        <Container id = "contExp">
          <Row className="mt-5 text-align-center">
            <Col className="col-md-6 m-auto">
              <form
                id="experienceForm"
                className=" card card-body expCard"
                onSubmit={e => this.onSubmit(e)}
              >
                  <label
                    style={{
                      color: " #052f5f",
                      fontWeight: "bold",
                      marginLeft: "35%"
                    }}
                  >
                    Add Experience
                  </label>
                  <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label className="label">Role Title</label>
                    <input
                      type="text"
                      className="form-control "
                      id="role"
                      required
                      value={this.state.experience.role}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      required
                      value={this.state.experience.company}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
         
                  <div className="col-md-6 mb-3">
                    <label className="label">Description</label>
                    <input
                      type="text"
                      className="form-control "
                      id="description"
                      required
                      value={this.state.experience.description}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      value={this.state.experience.startDate}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
               
                <div className="col-md-6 mb-3">
                  <label className="label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={this.state.experience.endDate}
                    onChange={e => this.onChange(e)}
                  />
                </div>
                </div>

                <button className="btn btn-primary btn-block" type="submit">
                 Add
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceForm);
