import React from 'react';
import recentPic from './images/recentPic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <div>
        <a href="#"><img src={recentPic} /> </a>
        
        <div className="form-group w-50">
          <label>My Name</label>
          <input className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default App;
