import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js';
 
 
const ToDoList = ({props},toDoList={toDoList}) => {
    
   return (
     <>
    <div id="ToDoList">
    {toDoList.map(todo => 
            <ToDo todo={todo} handleToggle={props.handleToggle} handleFilter={props.handleFilter}/>
    )}
</div>
</>
   );
};
 
export default ToDoList;