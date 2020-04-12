import React from "react";

const Student = ({ match }) => {
  const { studentname, studentno } = match.params;

  return (
    <div>
      <p>Student</p>
      <div>
        <h4>{`The student name is "${studentname}"`}</h4>
        <h4>{`The student no is ${studentno || "unknown"}`}</h4>
      </div>
    </div>
  );
};

export default Student;
