import React from 'react';
import './App.css';
const ToDo = (props) => {
   return (
       <div className={props.todo.complete ? "strike" : ""}>
               {/* todo.onlick = {props.handleToggle(props.todo.id)}; */}
           {props.todo.task}
       </div>
   );
};
export default ToDo;