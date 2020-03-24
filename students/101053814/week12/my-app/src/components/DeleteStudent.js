import React from "react";
import axios from "axios";
class DeleteStudent extends React.Component {
    state = { 
        id:this.props.id
     }
     
     handleSubmit = event =>{
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res=>{
            console.log(res);
        })
     };
    render() { 
        return ( 
            <div>
                    <button type="button" onClick={this.handleSubmit}>Delete</button>
            </div>
         );
    }
}
 
export default DeleteStudent;