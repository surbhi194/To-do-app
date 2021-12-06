import React, { useState } from 'react';
import './App.css';
const ToDo = (props) => {

    const demo = () => {
        props.strikeIndex(props.index);
    }
   return (
       <div className={props.todo.complete ? "strike" : ""}>
           <span onClick={demo}>{props.todo.task}</span>
       </div>
   );
};
export default ToDo;