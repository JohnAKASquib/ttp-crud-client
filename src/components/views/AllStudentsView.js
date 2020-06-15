import React from "react";
//import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h3>
              {student.firstName}
              {"  "}
              {student.lastName}
            </h3>
          </Link>
          <img
            src={
              student.imageUrl === ""
                ? "https://via.placeholder.com/480x240?text=Placeholder"
                : student.imageUrl
            }
            width="150px"
          />
          <h5 className="email">Email: {student.email}</h5>
          <h6 className="GPA">GPA: {student.gpa}</h6>
        </div>
      ))}
    </div>
  );
};

export default AllStudentsView;
