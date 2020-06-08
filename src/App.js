import React from 'react';
import './App.css';
import './CV_Template/style.css';
import UserForm from './UserForm.js';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    )
  }
}

export default App;
