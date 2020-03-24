import React from 'react';
import './App.css';
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";

function App() {
  return (
    <div className="App">
      <AddStudent />
      <DeleteStudent />
      <ul>
        <StudentList />
      </ul>
    </div>
  );
}

export default App;