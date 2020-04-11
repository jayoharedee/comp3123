import React from "react";

const Student = ({ match }) => {
    const {studentname} = match.params;
    const {studentno} = match.params

    var studentNumberOutput;

    if(studentno){
        studentNumberOutput = (
            <div>
                <div>{`The student no is "${studentno}"!`}</div>
            </div>
        )
    }
    
    return ( 
        <div>
            <p>Student</p>
            <div>
                <div>{`This student name is "${studentname}"!`}</div>
            </div>
            {studentNumberOutput}
        </div>

     );
}
 
export default Student;