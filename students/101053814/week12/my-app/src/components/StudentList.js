import React from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent"
import AddStudent from "./AddStudent"

class StudentList extends React.Component {
    state = { 
        users: []
     };
     
     constructor(props) {
        super(props);
        this.getStudents = this.getStudents.bind(this);
      }

     getStudents(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const users = res.data
            this.setState({users: users})
        });
     }
     componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const users = res.data
            this.setState({users: users})
        })
     }
    render() { 
        let usersList = [];
        for(var u in this.state.users){
            usersList.push(
                <>
                    <li>{this.state.users[u].name}</li>
                    <DeleteStudent id={this.state.users[u].id}></DeleteStudent>
                </>
            );
        }
        return ( 
            <>
                <AddStudent getStudents={this.getStudents}></AddStudent>
                <ul>{usersList}</ul>
            </>
         );
    }
}
export default StudentList;