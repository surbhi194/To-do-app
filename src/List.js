import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Add from './Add.js';
import User from './User.js';
function List(props) {
  return (
    <div className="List">
    <h2>welcome {props.user}</h2>
    <div className="Save1">
    <button className="Save"><Link to="/User">log out</Link></button>
    </div>
    <div className="More1">
    <button className="More"><b><Link to="/Add">+</Link></b></button>
    </div>
    </div>
  );
}

export default List;