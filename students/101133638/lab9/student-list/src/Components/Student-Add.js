import React from 'react';
import axios from 'axios';

class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let length = this.props.users.length;
        var user = { id: length +1 , name: this.state.name };
        console.log('user:', user);

        axios.post('http://jsonplaceholder.typicode.com/users', user)
            .then(res => {
                this.props.users.push(user);
                console.log('student res:', res.data);
                console.log('students added:', this.props.users);

            });
    }

   
    render() {
        const { name } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Person Name:
                       <input style={{ marginLeft: '14px', marginRight: '14px' }}
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Add User</button>
                </form>
            </div>
        );
    }
}

export default AddUser;