import React from 'react';

import './App.css';

import StudentList from './Components/Student-List';

function App(props) {
  return (
    <div >
      <header className="App-header">
        <StudentList />
      </header>
    </div>
  );
}

export default App;
