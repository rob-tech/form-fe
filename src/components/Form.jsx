import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import { addExperience } from "../actions/index";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  errMess: () =>
    dispatch({
      type: "ERR_MSG"
    }),
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
      role: "",
      company: "",
      description: "",
      startDate: Date,
      endDate: Date,
      experience: {}
    };
  }

  onChange = async e => {
    const experience = this.state.experience;
    experience[e.currentTarget.id] = e.currentTarget.value;
    console.log(experience[e.currentTarget.name]);
    this.props.setLoading();
    this.setState({ experience: experience });
  };

  onSubmit = async e => {
    e.preventDefault();
    await this.props.addExperienceThunk(this.state.experience);
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <form
                id="registerform"
                className=" shadow p-3 mb-5 bg-white"
                onSubmit={e => this.onSubmit(e)}
              >
                <div>
                  <label
                    style={{
                      color: " #052f5f",
                      fontWeight: "bold",
                      // color: "#692799",
                      marginLeft: "35%"
                    }}
                  >
                    Add Experience
                  </label>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label className="label">Role Title</label>
                    <input
                      type="text"
                      className="form-control "
                      id="role"
                      required
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
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label className="label">Description</label>
                    <input
                      type="text"
                      className="form-control "
                      id="description"
                      required
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    onChange={e => this.onChange(e)}
                  />
                </div>

                <button className="submitButton" type="submit">
                  Register
                </button>
              </form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceForm);
