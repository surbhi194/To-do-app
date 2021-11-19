import React, { useState } from 'react';
import './App.css';
import Add from './Add.js';
import User from './User.js';
function List(props) {
    function logout()
    {
        <User/>
    }
    function addmore()
    {
        <add/>
    }
  return (
    <div className="List">
    <h2>welcome {props.user}</h2>
    <button className="Save" onClick={()=>logout}>log out</button>
    <button className="More" onClick={()=>addmore}>+</button>
    </div>
  );
}

export default List;