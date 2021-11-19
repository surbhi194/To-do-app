import React from 'react';
import './App.css';
import User from './User';
import Home from './Home';
import List from './List';
import Add from './Add';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Link to ="/User"> User</Link>
        <Link to ="/List"> List</Link>
        <Link to ="/Add"> Add</Link>
        <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route path="/List" component={List}></Route>
        <Route path="/Add" component={Add}></Route>
        </Routes>
      </Router>
      {/* <User/> */}
    </div>
  );
}

export default App;
