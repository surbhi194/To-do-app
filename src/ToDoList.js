import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js';


const ToDoList = (props) => {
   useEffect(() => {
      console.log(props.toDoList);
   }, [])

   const strikeIndex = (value) => {
      props.strikeIndex(value);
   }
   return (
      <>
         <div id="ToDoList">
            {props.toDoList.length > 0 && props.toDoList.map((todo, index) => {
               return <>
                  <ToDo todo={todo} index={index} strikeIndex={strikeIndex}/>
               </>
            })
            }
         </div>
      </>
   );
};

export default ToDoList;