import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../thunks";
import { AllStudentsView } from "../views";

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }
  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };
  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        handleDelete={this.handleDelete}
      />
    );
  }
}
//map state to props
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};
//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(AllStudentsContainer);
