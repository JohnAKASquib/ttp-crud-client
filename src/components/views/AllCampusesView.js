import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img
            src={
              campus.imageUrl === ""
                ? "https://via.placeholder.com/480x240?text=Placeholder"
                : campus.imageUrl
            }
            width="200px"
          />
          <p>
            {campus.students === undefined ? 0 : campus.students.length}{" "}
            students
          </p>
          <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
