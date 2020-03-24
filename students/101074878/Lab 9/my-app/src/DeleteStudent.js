import React from 'react';
import axios from 'axios';

class DeleteStudent extends React.Component {
    state = { 
        id: ""
    };
    
    handleChange = event => {
        this.setState({
            id: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then( res => {
            console.log(res);
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        });
    };
    
    render() { 
        return (
        <React.Fragment>
         <form onSubmit={this.handleSubmit}>
          <label>
            ID to Delete :
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit"> Submit</button>
        </form>
      </React.Fragment>
        );
    }
}
 
export default DeleteStudent;