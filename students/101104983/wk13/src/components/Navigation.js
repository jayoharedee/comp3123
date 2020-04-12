import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/student/Thong Nguyen">Student: Thong Nguyen</Link>
      </li>
      <li>
        <Link to="/student/Thong Nguyen/140366">
          Student: Thong Nguyen, Student No: 140366
        </Link>
      </li>
      <li>
        <Link to="/redirect">Redirect</Link>
      </li>
    </div>
  );
};

export default Navigation;
