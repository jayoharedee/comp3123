import React, { Component } from "react";
import ReactDOM from 'react-dom';
import StudentList from "./week12/StudentList.js"; 
import StudentList from "./week12/StudentList.js"; 

class App extends Component {
    render() {
        return (
           <p><StudentList></StudentList></p> 
        )
    }
}

ReactDOM.render( 
    <App/>, 
    document.getElementById('root') 
  );

