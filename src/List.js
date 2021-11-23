import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Add from './Add.js';
import User from './User.js';
function List() {
  return (
    <div className="List">
    <h2>welcome name</h2>
    <div className="Save1">
    <button className="Save"><Link to="/User">log out</Link></button>
    </div>
    <div className="More1">
    <button className="More"><b><Link to="/Add">+</Link></b></button>
    </div>
    <div className="data">
      data with button remove
    </div>
    </div>
  );
}

export default List;