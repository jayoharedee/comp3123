import React from "react";
import Course from "./course";
const Student = props => {
    let courseTags = []
    for(var i=0;i<props.enrolled;i++){
        courseTags.push(<Course enrolled={i} />)
    }
    return ( 
    <>
        <p>
            Student <b>{props.name}</b> with student number <b>{props.number}</b>
        </p>
        {courseTags}
    </>
    );
}
 
export default Student;