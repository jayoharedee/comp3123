import React from 'react';

const Course = props => {
    return ( 
        <p>
            Student is enrolled in <b>Course {props.enrolled}</b>
        </p>
     );
}
 
export default Course