import React from 'react';
import axios from 'axios';
import AddUser from './Student-Add';

const User = (props) => (
    <div>
        {props.user.name} 
    </div>
);

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                this.setState({ users: users });
                console.log('students:', res.data);
            });
    }

    userList() {
        return this.state.users.map((current, i) => {
            return <User user={current} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <AddUser users={this.state.users} />
                {this.userList()}
            </div>
        );
    }
}

export default UserList;
