import React from "react";
import axios from "axios";

//GET Request
class UserList extends React.component {
    state = {
        users: []
     }

     componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }

    render() {
        return (<ul>
            { this.state.users.map(person => <li>{users.name}</li>)}
          </ul>)
    }
}

//POST
class AddStudent extends React.component {
    state = {
        name: ""
    }
    
    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = event => {
        axios.post(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            console.log("name added");
          })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default UserList;
export default AddStudent; 