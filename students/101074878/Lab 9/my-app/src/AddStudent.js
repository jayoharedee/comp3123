import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {
    state = { 
        name: ""
    };
    
    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',
         {name: this.state.name}).then( res => {
            console.log(res);
            console.log(res.data);
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        });;
        this.props.update(this.state.name)
      };
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                        <button type="submit">Add</button>
                </form>
            </div>
         );
    }
}
 
export default AddStudent;