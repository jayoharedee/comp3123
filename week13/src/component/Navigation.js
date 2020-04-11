import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Student from './Student';

const Navigation = () => {
    return ( 
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/student/Jim%20Smith/">Student: Jim Smith</Link>
                </li>
                <li>
                <Link to="/student/Jane%20Smith/50001">Student: Jane Smith, Student No: 50001</Link>
                </li>
                <li>
                <Link to="/redirect">Redirect</Link>
                </li>
          </ul>
        </div>
     );
}
 
export default Navigation;