import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js';


const ToDoList = (props) => {
   const [toDoList, setToDoList] = useState("");
   useEffect(() => {
      console.log(props.toDoList);
      setToDoList(props.toDoList);
   }, [])
   return (
      <>
         <div id="ToDoList">
            {toDoList.length > 0 && toDoList.map((todo, index) => {
               return <>
                  {/* <div>{todo.task}</div>
                  <div>{todo.id}</div> */}
                  <ToDo todo={todo} />
               </>
            })
            }
         </div>
      </>
   );
};
// handleToggle={props.handleToggle} handleFilter={props.handleFilter
export default ToDoList;