import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js';


const ToDoList = (props) => {
   useEffect(() => {
      console.log(props.toDoList);
   }, [])
   return (
      <>
         <div id="ToDoList">
            {props.toDoList.length > 0 && props.toDoList.map((todo, index) => {
               return <>
                  <ToDo todo={todo} toggle={props.handleToggle}/>
               </>
            })
            }
         </div>
      </>
   );
};

export default ToDoList;