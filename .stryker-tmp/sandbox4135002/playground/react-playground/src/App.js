import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/users-list';

function App() {
  const allUsers = [{id:1 , name: 'Yoni Goldberg', vip: false}, 
   {id:2 , name: 'John Doe', vip: true}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br/>
      <h1>users</h1>
      <UsersList users={allUsers} showOnlyVIP={true}/>
    </div>
  );
}

export default App;